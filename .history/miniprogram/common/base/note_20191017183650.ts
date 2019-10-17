import { isEmpty } from "../../utils/isEmpty";

type Fn = (...args:any) => any;
interface NoteData {
  [scopeName: string]: {
    value: any,
    watch: {
      [webid: string]: {
        [nodeid: string] : (never | Fn)[]
      }
    }
  }
}

class Note {
  data: NoteData;
  constructor(){
    this.data = {}
  }
  emit(scope: string, value: any){
    return new Promise((resolve:any, reject:any) => {
      try {
        const page:any = getCurrentPages().pop()
        Object.keys(this.data[scope].watch[page.__wxWebviewId__]).forEach(nodeId => {
          this.data[scope].watch[page.__wxWebviewId__][nodeId].forEach(fn => {
            fn(value, this.data[scope].value)
            this.data[scope].value = value
          })
        })
        resolve(this.data[scope].value, value)
      } catch (error) {
        reject(error)
      }
    })
  }
  on(scope:string | (string[]), fn: any, ctx: WxComponent | Page.PageInstance):any{
    const type = Object.prototype.toString.call(scope)
    if(type === '[object String]') return this._on(scope as string, fn, ctx)
    if(type === '[object Array]') {
      return (scope as string[]).map((sc:string) => this._on(sc, fn, ctx))
    }
  }
  off(scope:string | string[], ctx: WxComponent | Page.PageInstance): void{
    const type = Object.prototype.toString.call(scope)
    if(type === '[object String]') this._off(scope as string, ctx)
    if(type === '[object Array]') {
      (scope as string[]).map((sc:string) => this._off(sc, ctx))
    }
  }

  _on(scope:string, fn: Fn, ctx: WxComponent | Page.PageInstance):any{
    if(!this.data[scope]) this.data[scope] = {value: null, watch:{}}
    if(!this.data[scope].watch[ctx.__wxWebviewId__]) this.data[scope].watch[ctx.__wxWebviewId__] = {}
    if(!this.data[scope].watch[ctx.__wxWebviewId__][ctx.__wxExparserNodeId__]) this.data[scope].watch[ctx.__wxWebviewId__][ctx.__wxExparserNodeId__] = []
    this.data[scope].watch[ctx.__wxWebviewId__][ctx.__wxExparserNodeId__].push(fn.bind(ctx))
    return this.data[scope].value
  }

  _off(scope:string, ctx: WxComponent | Page.PageInstance){
    try {
      delete this.data[scope].watch[ctx.__wxWebviewId__][ctx.__wxExparserNodeId__]
      if( isEmpty(this.data[scope].watch) ) delete this.data[scope].watch
      if( isEmpty(this.data[scope].watch[ctx.__wxWebviewId__]) ) delete this.data[scope].watch[ctx.__wxWebviewId__]
    } catch(err) {}
    
  }
}


export default new Note()