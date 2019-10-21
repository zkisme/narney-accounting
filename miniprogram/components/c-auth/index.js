"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = require("../../common/base/baseComponent");
var note_1 = require("../../common/base/note");
var session_1 = require("../../utils/session");
baseComponent_1.BaseComponent({
    properties: {
        show: Boolean
    },
    data: {},
    created: function () {
        note_1.default.on("showAuth", this.toggleAuth, this);
    },
    methods: {
        toggleAuth: function (value) {
            this.setData({
                show: !this.data.show
            });
            value && value.success && value.success(value);
        },
        getUserInfo: function (e) {
            var userInfo = e.detail.userInfo;
            this.setData({ userInfo: userInfo });
            session_1.session.setSync("userinfo", userInfo);
            note_1.default.emit("userinfo", userInfo);
            this.hideAuth();
        },
        hideAuth: function () {
            this.toggleAuth();
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUFnRTtBQUNoRSwrQ0FBMEM7QUFDMUMsK0NBQThDO0FBRzlDLDZCQUFhLENBQUM7SUFJWixVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsT0FBTztLQUNkO0lBS0QsSUFBSSxFQUFFLEVBQUU7SUFFUixPQUFPO1FBQ0wsY0FBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBS0QsT0FBTyxFQUFFO1FBQ1AsVUFBVSxFQUFWLFVBQVcsS0FBVztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTthQUN0QixDQUFDLENBQUM7WUFDSCxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDRCxXQUFXLFlBQUMsQ0FBQztZQUNILElBQUEsNEJBQVEsQ0FBYztZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLGlCQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN0QyxjQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsQ0FBQztRQUNELFFBQVE7WUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vYmFzZS9iYXNlQ29tcG9uZW50XCI7XG5pbXBvcnQgbm90ZSBmcm9tIFwiLi4vLi4vY29tbW9uL2Jhc2Uvbm90ZVwiO1xuaW1wb3J0IHsgc2Vzc2lvbiB9IGZyb20gXCIuLi8uLi91dGlscy9zZXNzaW9uXCI7XG5cbi8vIGNvbXBvbmVudHMvYy1hdXRoL2luZGV4LmpzXG5CYXNlQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIHNob3c6IEJvb2xlYW5cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7fSxcblxuICBjcmVhdGVkKCkge1xuICAgIG5vdGUub24oXCJzaG93QXV0aFwiLCB0aGlzLnRvZ2dsZUF1dGgsIHRoaXMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVBdXRoKHZhbHVlPzogYW55KSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzaG93OiAhdGhpcy5kYXRhLnNob3dcbiAgICAgIH0pO1xuICAgICAgdmFsdWUgJiYgdmFsdWUuc3VjY2VzcyAmJiB2YWx1ZS5zdWNjZXNzKHZhbHVlKTtcbiAgICB9LFxuICAgIGdldFVzZXJJbmZvKGUpIHtcbiAgICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IGUuZGV0YWlsO1xuICAgICAgdGhpcy5zZXREYXRhKHsgdXNlckluZm8gfSk7XG4gICAgICBzZXNzaW9uLnNldFN5bmMoXCJ1c2VyaW5mb1wiLCB1c2VySW5mbyk7XG4gICAgICBub3RlLmVtaXQoXCJ1c2VyaW5mb1wiLCB1c2VySW5mbyk7XG4gICAgICB0aGlzLmhpZGVBdXRoKCk7XG4gICAgfSxcbiAgICBoaWRlQXV0aCgpIHtcbiAgICAgIHRoaXMudG9nZ2xlQXV0aCgpO1xuICAgIH1cbiAgfVxufSk7XG4iXX0=