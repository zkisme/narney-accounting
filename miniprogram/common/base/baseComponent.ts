import {defaultData} from './value'

export const BaseComponent = (options:any) => {
  if(!options.data) options.data = {}
  Object.assign(options.data, defaultData) 

  Component(options)
}