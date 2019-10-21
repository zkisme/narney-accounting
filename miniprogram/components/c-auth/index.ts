import { BaseComponent } from "../../common/base/baseComponent";
import note from "../../common/base/note";
import { session } from "../../utils/session";

// components/c-auth/index.js
BaseComponent({
  /**
   * 组件的属性列表
   */
  properties: {
    show: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {},

  created() {
    note.on("showAuth", this.toggleAuth, this);
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggleAuth(value?: any) {
      this.setData({
        show: !this.data.show
      });
      value && value.success && value.success(value);
    },
    getUserInfo(e) {
      const { userInfo } = e.detail;
      this.setData({ userInfo });
      session.setSync("userinfo", userInfo);
      note.emit("userinfo", userInfo);
      this.hideAuth();
    },
    hideAuth() {
      this.toggleAuth();
    }
  }
});
