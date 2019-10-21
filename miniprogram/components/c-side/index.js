"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = require("../../common/base/baseComponent");
var note_1 = require("../../common/base/note");
var session_1 = require("../../utils/session");
baseComponent_1.BaseComponent({
    properties: {},
    data: {},
    attached: function () {
        var userinfo = session_1.session.get("userinfo");
        if (userinfo)
            this.setUserInfo(userinfo);
        note_1.default.on("userinfo", this.setUserInfo, this);
    },
    methods: {
        auth: function () {
            note_1.default.emit("showAuth", {
                success: function (value) {
                    console.log(123, value);
                }
            });
        },
        setUserInfo: function (userinfo) {
            console.log(userinfo);
            var avatarUrl = userinfo.avatarUrl, nickName = userinfo.nickName;
            this.setData({
                avatarUrl: avatarUrl,
                nickName: nickName
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUFnRTtBQUNoRSwrQ0FBMEM7QUFDMUMsK0NBQThDO0FBRzlDLDZCQUFhLENBQUM7SUFJWixVQUFVLEVBQUUsRUFBRTtJQUtkLElBQUksRUFBRSxFQUFFO0lBRVIsUUFBUTtRQUNOLElBQUksUUFBUSxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksUUFBUTtZQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsY0FBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBS0QsT0FBTyxFQUFFO1FBQ1AsSUFBSTtZQUNGLGNBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQixPQUFPLEVBQUUsVUFBQSxLQUFLO29CQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELFdBQVcsWUFBQyxRQUFRO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDZCxJQUFBLDhCQUFTLEVBQUUsNEJBQVEsQ0FBYztZQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFNBQVMsV0FBQTtnQkFDVCxRQUFRLFVBQUE7YUFDVCxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9iYXNlL2Jhc2VDb21wb25lbnRcIjtcbmltcG9ydCBub3RlIGZyb20gXCIuLi8uLi9jb21tb24vYmFzZS9ub3RlXCI7XG5pbXBvcnQgeyBzZXNzaW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Nlc3Npb25cIjtcblxuLy8gY29tcG9uZW50cy9jLXNpZGUvaW5kZXguanNcbkJhc2VDb21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7fSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7fSxcblxuICBhdHRhY2hlZCgpIHtcbiAgICBsZXQgdXNlcmluZm8gPSBzZXNzaW9uLmdldChcInVzZXJpbmZvXCIpO1xuICAgIGlmICh1c2VyaW5mbykgdGhpcy5zZXRVc2VySW5mbyh1c2VyaW5mbyk7XG4gICAgbm90ZS5vbihcInVzZXJpbmZvXCIsIHRoaXMuc2V0VXNlckluZm8sIHRoaXMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICBhdXRoKCkge1xuICAgICAgbm90ZS5lbWl0KFwic2hvd0F1dGhcIiwge1xuICAgICAgICBzdWNjZXNzOiB2YWx1ZSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coMTIzLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0VXNlckluZm8odXNlcmluZm8pIHtcbiAgICAgIGNvbnNvbGUubG9nKHVzZXJpbmZvKTtcbiAgICAgIGNvbnN0IHsgYXZhdGFyVXJsLCBuaWNrTmFtZSB9ID0gdXNlcmluZm87XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBhdmF0YXJVcmwsXG4gICAgICAgIG5pY2tOYW1lXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pO1xuIl19