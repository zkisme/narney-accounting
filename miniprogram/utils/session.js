"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _data = {};
exports.session = {
    get: function (key) {
        if (_data[key] !== undefined)
            return _data[key];
        var res = wx.getStorageSync(key);
        _data[key] = res;
        return res;
    },
    setSync: function (key, value) {
        wx.setStorageSync(key, value);
        _data[key] = value;
    },
    set: function (options) {
        var key = options.key, data = options.data;
        _data[key] = data;
        wx.setStorage(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFNLEtBQUssR0FBUSxFQUFFLENBQUM7QUFFVCxRQUFBLE9BQU8sR0FBRztJQUtyQixHQUFHLEVBQUgsVUFBSSxHQUFXO1FBQ2IsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUztZQUFFLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNqQixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFPRCxPQUFPLEVBQVAsVUFBUSxHQUFXLEVBQUUsS0FBVTtRQUM3QixFQUFFLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QixLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxHQUFHLEVBQUgsVUFBSSxPQU1IO1FBQ1MsSUFBQSxpQkFBRyxFQUFFLG1CQUFJLENBQWE7UUFDOUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNsQixFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5a2Y5pS+c2Vzc2lvbueahOS4tOaXtuaVsOaNrlxyXG5jb25zdCBfZGF0YTogYW55ID0ge307XHJcblxyXG5leHBvcnQgY29uc3Qgc2Vzc2lvbiA9IHtcclxuICAvKipcclxuICAgKiDojrflj5ZzZXNzaW9uXHJcbiAgICogQHBhcmFtIGtleSDlrZjlhaXnmoRrZXlcclxuICAgKi9cclxuICBnZXQoa2V5OiBzdHJpbmcpIHtcclxuICAgIGlmIChfZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIHJldHVybiBfZGF0YVtrZXldO1xyXG4gICAgY29uc3QgcmVzID0gd3guZ2V0U3RvcmFnZVN5bmMoa2V5KTtcclxuICAgIF9kYXRhW2tleV0gPSByZXM7XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOWtmOWCqHNlc3Npb27lkIzmraXniYjmnKxcclxuICAgKiBAcGFyYW0ga2V5IOWtmOWCqOeahGtleVxyXG4gICAqIEBwYXJhbSB2YWx1ZSDlrZjlgqjnmoTlgLxcclxuICAgKi9cclxuICBzZXRTeW5jKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICB3eC5zZXRTdG9yYWdlU3luYyhrZXksIHZhbHVlKTtcclxuICAgIF9kYXRhW2tleV0gPSB2YWx1ZTtcclxuICB9LFxyXG5cclxuICBzZXQob3B0aW9uczoge1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICBkYXRhOiBhbnk7XHJcbiAgICBzdWNjZXNzPzogKCkgPT4gYW55O1xyXG4gICAgZmFpbD86ICgpID0+IGFueTtcclxuICAgIGNvbXBsZXRlPzogKCkgPT4gYW55O1xyXG4gIH0pIHtcclxuICAgIGNvbnN0IHsga2V5LCBkYXRhIH0gPSBvcHRpb25zO1xyXG4gICAgX2RhdGFba2V5XSA9IGRhdGE7XHJcbiAgICB3eC5zZXRTdG9yYWdlKG9wdGlvbnMpO1xyXG4gIH1cclxufTtcclxuIl19