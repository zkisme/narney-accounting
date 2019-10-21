import { isEmpty } from "../../utils/isEmpty";

type Fn = (...args: any) => any;
interface NoteData {
  [scopeName: string]: {
    value: any;
    watch: {
      [webid: string]: {
        [nodeid: string]: (never | Fn)[];
      };
    };
  };
}

class Note {
  data: NoteData; // 数据存放
  constructor() {
    this.data = {};
  }
  /**
   * 获取数据
   * @param scope 获取指定scope的value，不传时返回所有数据
   */
  get(scope?: string) {
    if (scope) return this.data[scope] ? this.data[scope].value : undefined;
    let res: any = {};
    Object.keys(this.data).map(key => {
      res[key] = this.data[key].value;
    });
  }

  /**
   * 修改数据，会触发绑定的方法
   * @param scope 修改的节点
   * @param value 修改的数据
   */
  emit(scope: string, value?: any) {
    const self = this;
    return new Promise((resolve: any, reject: any) => {
      try {
        // 数据中节点不存在
        if (!self.data[scope]) self.data[scope] = { value, watch: {} };
        else {
          const page: any = getCurrentPages().pop();
          Object.keys(self.data[scope].watch[page.__wxWebviewId__]).forEach(
            nodeId => {
              self.data[scope].watch[page.__wxWebviewId__][nodeId].forEach(
                fn => {
                  fn(value, self.data[scope].value);
                  self.data[scope].value = value;
                }
              );
            }
          );
        }

        resolve(self.data[scope].value, value);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * 绑定监听数据变化
   * @param scope 监听的节点
   * @param fn 监听的函数
   * @param ctx 当前页面或者自定义组件的this
   */
  on(
    scope: string | (string[]),
    fn: any,
    ctx: WxComponent | Page.PageInstance
  ): any {
    const type = Object.prototype.toString.call(scope);
    if (type === "[object String]") return this._on(scope as string, fn, ctx);
    if (type === "[object Array]") {
      return (scope as string[]).map((sc: string) => this._on(sc, fn, ctx));
    }
  }
  /**
   * 取消绑定监听
   * @param scope 取消绑定的节点
   * @param ctx  当前页面或者自定义组件的this
   */
  off(scope: string | string[], ctx: WxComponent | Page.PageInstance): void {
    const type = Object.prototype.toString.call(scope);
    if (type === "[object String]") this._off(scope as string, ctx);
    if (type === "[object Array]") {
      (scope as string[]).map((sc: string) => this._off(sc, ctx));
    }
  }

  _on(scope: string, fn: Fn, ctx: WxComponent | Page.PageInstance): any {
    if (!this.data[scope]) this.data[scope] = { value: null, watch: {} };
    if (!this.data[scope].watch[ctx.__wxWebviewId__])
      this.data[scope].watch[ctx.__wxWebviewId__] = {};
    if (!this.data[scope].watch[ctx.__wxWebviewId__][ctx.__wxExparserNodeId__])
      this.data[scope].watch[ctx.__wxWebviewId__][
        ctx.__wxExparserNodeId__
      ] = [];
    this.data[scope].watch[ctx.__wxWebviewId__][ctx.__wxExparserNodeId__].push(
      fn.bind(ctx)
    );
    return this.data[scope].value;
  }

  _off(scope: string, ctx: WxComponent | Page.PageInstance) {
    try {
      delete this.data[scope].watch[ctx.__wxWebviewId__][
        ctx.__wxExparserNodeId__
      ];
      if (isEmpty(this.data[scope].watch)) delete this.data[scope].watch;
      if (isEmpty(this.data[scope].watch[ctx.__wxWebviewId__]))
        delete this.data[scope].watch[ctx.__wxWebviewId__];
    } catch (err) {}
  }
}

export default new Note();
