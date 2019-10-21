// 存放session的临时数据
const _data: any = {};

export const session = {
  /**
   * 获取session
   * @param key 存入的key
   */
  get(key: string) {
    if (_data[key] !== undefined) return _data[key];
    const res = wx.getStorageSync(key);
    _data[key] = res;
    return res;
  },

  /**
   * 存储session同步版本
   * @param key 存储的key
   * @param value 存储的值
   */
  setSync(key: string, value: any) {
    wx.setStorageSync(key, value);
    _data[key] = value;
  },

  set(options: {
    key: string;
    data: any;
    success?: () => any;
    fail?: () => any;
    complete?: () => any;
  }) {
    const { key, data } = options;
    _data[key] = data;
    wx.setStorage(options);
  }
};
