import { BaseComponent } from "../../common/base/baseComponent";
import note from "../../common/base/note";
import { session } from "../../utils/session";

// components/c-side/index.js
BaseComponent({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {},

  attached() {
    let userinfo = session.get("userinfo");
    if (userinfo) this.setUserInfo(userinfo);
    note.on("userinfo", this.setUserInfo, this);
  },

  /**
   * 组件的方法列表
   */
  methods: {
    auth() {
      note.emit("showAuth");
    },
    setUserInfo(userinfo) {
      console.log(userinfo);
      const { avatarUrl, nickName } = userinfo;
      this.setData({
        avatarUrl,
        nickName
      });
    }
  }
});
