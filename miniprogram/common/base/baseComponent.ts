import {defaultData} from './value'

export function BaseComponent (options:BaseComponent) {
  if(!options.data) options.data = {}
  Object.assign(options.data, defaultData) 

  if(!options.options) options.options = {}
  options.options.addGlobalClass = true

  Component(options)
}