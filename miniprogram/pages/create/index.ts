import { BasePage } from "../../common/base/basePage";

// miniprogram/pages/create/index.js
BasePage({
  /**
   * 页面的初始数据
   */
  data: {},
  money: 0,

  inputNumber(e: any) {
    this.money = e.detail.value;
  }
});
