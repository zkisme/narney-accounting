"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = require("../../common/base/baseComponent");
baseComponent_1.BaseComponent({
    properties: {
        useSide: {
            type: Boolean,
            value: true
        },
        showSide: Boolean,
        showSideMenu: {
            type: Boolean,
            value: true
        }
    },
    data: {},
    methods: {
        toggleSide: function () {
            this.setData({ showSide: !this.data.showSide });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUFnRTtBQUVoRSw2QkFBYSxDQUFDO0lBSVosVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsSUFBSTtTQUNaO1FBQ0QsUUFBUSxFQUFFLE9BQU87UUFDakIsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0Y7SUFLRCxJQUFJLEVBQUUsRUFDTDtJQUtELE9BQU8sRUFBRTtRQUNQLFVBQVU7WUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFBO1FBQy9DLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2Jhc2UvYmFzZUNvbXBvbmVudFwiO1xuXG5CYXNlQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIHVzZVNpZGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0sIC8vIOS9v+eUqOS+p+i+ueagj1xuICAgIHNob3dTaWRlOiBCb29sZWFuLCAvLyDmmL7npLrkvqfovrnmoI9cbiAgICBzaG93U2lkZU1lbnU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIHRvZ2dsZVNpZGUoKXtcbiAgICAgIHRoaXMuc2V0RGF0YSh7c2hvd1NpZGU6ICF0aGlzLmRhdGEuc2hvd1NpZGV9KVxuICAgIH1cbiAgfVxufSlcbiJdfQ==