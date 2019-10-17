import { BaseComponent } from "../../common/base/baseComponent";
import note from "../../common/base/note";

// components/c-auth/index.js
BaseComponent({
  /**
   * 组件的属性列表
   */
  properties: {
    show: Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  created(){
    note.on('showAuth', this.toggleAuth, this)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggleAuth(value){
      this.setData({
        show: !this.data.show
      })
      value && value.callback && value.callback()
    }
  }
})
