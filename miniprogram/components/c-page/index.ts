import { BaseComponent } from "../../common/base/baseComponent";

BaseComponent({
  /**
   * 组件的属性列表
   */
  properties: {
    useSide: {
      type: Boolean,
      value: true
    }, // 使用侧边栏
    showSide: Boolean, // 显示侧边栏
    showSideMenu: {
      type: Boolean,
      value: true
    }
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
    toggleSide(){
      this.setData({showSide: !this.data.showSide})
    }
  }
})
