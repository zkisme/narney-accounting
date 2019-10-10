"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var value_1 = require("./value");
function BaseComponent(options) {
    if (!options.data)
        options.data = {};
    Object.assign(options.data, value_1.defaultData);
    if (!options.options)
        options.options = {};
    options.options.addGlobalClass = true;
    Component(options);
}
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2VDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBbUM7QUFFbkMsU0FBZ0IsYUFBYSxDQUFFLE9BQXFCO0lBQ2xELElBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSTtRQUFFLE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFBO0lBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxtQkFBVyxDQUFDLENBQUE7SUFFeEMsSUFBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPO1FBQUUsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUE7SUFDekMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFBO0lBRXJDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUNwQixDQUFDO0FBUkQsc0NBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RlZmF1bHREYXRhfSBmcm9tICcuL3ZhbHVlJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhc2VDb21wb25lbnQgKG9wdGlvbnM6QmFzZUNvbXBvbmVudCkge1xyXG4gIGlmKCFvcHRpb25zLmRhdGEpIG9wdGlvbnMuZGF0YSA9IHt9XHJcbiAgT2JqZWN0LmFzc2lnbihvcHRpb25zLmRhdGEsIGRlZmF1bHREYXRhKSBcclxuXHJcbiAgaWYoIW9wdGlvbnMub3B0aW9ucykgb3B0aW9ucy5vcHRpb25zID0ge31cclxuICBvcHRpb25zLm9wdGlvbnMuYWRkR2xvYmFsQ2xhc3MgPSB0cnVlXHJcblxyXG4gIENvbXBvbmVudChvcHRpb25zKVxyXG59Il19