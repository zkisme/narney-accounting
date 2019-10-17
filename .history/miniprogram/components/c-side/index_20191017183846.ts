import { BaseComponent } from "../../common/base/baseComponent";
import note from "../../common/base/note";

// components/c-side/index.js
BaseComponent({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    auth(){
      note.emit('showAuth', {
        success: (value) => { console.log(123, value) }
      })
    }
  }
})
