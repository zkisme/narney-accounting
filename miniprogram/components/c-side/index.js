"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = require("../../common/base/baseComponent");
var note_1 = require("../../common/base/note");
baseComponent_1.BaseComponent({
    properties: {},
    data: {},
    methods: {
        auth: function () {
            note_1.default.emit('showAuth', {
                callback: function (value) { console.log(123, value); }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUFnRTtBQUNoRSwrQ0FBMEM7QUFHMUMsNkJBQWEsQ0FBQztJQUlaLFVBQVUsRUFBRSxFQUVYO0lBS0QsSUFBSSxFQUFFLEVBRUw7SUFLRCxPQUFPLEVBQUU7UUFDUCxJQUFJO1lBQ0YsY0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BCLFFBQVEsRUFBRSxVQUFDLEtBQUssSUFBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQSxDQUFDLENBQUM7YUFDakQsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vYmFzZS9iYXNlQ29tcG9uZW50XCI7XG5pbXBvcnQgbm90ZSBmcm9tIFwiLi4vLi4vY29tbW9uL2Jhc2Uvbm90ZVwiO1xuXG4vLyBjb21wb25lbnRzL2Mtc2lkZS9pbmRleC5qc1xuQmFzZUNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICBhdXRoKCl7XG4gICAgICBub3RlLmVtaXQoJ3Nob3dBdXRoJywge1xuICAgICAgICBjYWxsYmFjazogKHZhbHVlKSA9PiB7IGNvbnNvbGUubG9nKDEyMywgdmFsdWUpIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuIl19