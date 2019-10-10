import {defaultData} from './value'

export function BasePage (options:any) {
  if(!options.data) options.data = {}
  Object.assign(options.data, defaultData) 

  Page(options)
}