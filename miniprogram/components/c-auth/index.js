"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = require("../../common/base/baseComponent");
var note_1 = require("../../common/base/note");
baseComponent_1.BaseComponent({
    properties: {
        show: Boolean,
    },
    data: {},
    created: function () {
        note_1.default.on('showAuth', this.toggleAuth, this);
    },
    methods: {
        toggleAuth: function (value) {
            this.setData({
                show: !this.data.show
            });
            value && value.callback && value.callback(value);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUFnRTtBQUNoRSwrQ0FBMEM7QUFHMUMsNkJBQWEsQ0FBQztJQUlaLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFLRCxJQUFJLEVBQUUsRUFFTDtJQUVELE9BQU87UUFDTCxjQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFLRCxPQUFPLEVBQUU7UUFDUCxVQUFVLFlBQUMsS0FBSztZQUNkLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ3RCLENBQUMsQ0FBQTtZQUNGLEtBQUssSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbEQsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vYmFzZS9iYXNlQ29tcG9uZW50XCI7XG5pbXBvcnQgbm90ZSBmcm9tIFwiLi4vLi4vY29tbW9uL2Jhc2Uvbm90ZVwiO1xuXG4vLyBjb21wb25lbnRzL2MtYXV0aC9pbmRleC5qc1xuQmFzZUNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBzaG93OiBCb29sZWFuLFxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcblxuICB9LFxuXG4gIGNyZWF0ZWQoKXtcbiAgICBub3RlLm9uKCdzaG93QXV0aCcsIHRoaXMudG9nZ2xlQXV0aCwgdGhpcylcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgdG9nZ2xlQXV0aCh2YWx1ZSl7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzaG93OiAhdGhpcy5kYXRhLnNob3dcbiAgICAgIH0pXG4gICAgICB2YWx1ZSAmJiB2YWx1ZS5jYWxsYmFjayAmJiB2YWx1ZS5jYWxsYmFjayh2YWx1ZSlcbiAgICB9XG4gIH1cbn0pXG4iXX0=