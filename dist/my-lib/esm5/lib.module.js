import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo/foo.component';
import { BarService } from './bar/bar.service';
var MyLibModule = /** @class */ (function () {
    function MyLibModule() {
    }
    MyLibModule_1 = MyLibModule;
    MyLibModule.forRoot = function () {
        return {
            ngModule: MyLibModule_1,
            providers: [
                BarService
            ]
        };
    };
    var MyLibModule_1;
    MyLibModule = MyLibModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: [
                FooComponent
            ],
            exports: [
                FooComponent
            ]
        })
    ], MyLibModule);
    return MyLibModule;
}());
export { MyLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BteS9saWIvIiwic291cmNlcyI6WyJsaWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQWEvQztJQUFBO0lBV0EsQ0FBQztvQkFYWSxXQUFXO0lBRVIsbUJBQU8sR0FBckI7UUFFRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNULFVBQVU7YUFDWDtTQUNGLENBQUM7SUFDSixDQUFDOztJQVZVLFdBQVc7UUFYdkIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7YUFDYjtZQUNELFlBQVksRUFBRTtnQkFDWixZQUFZO2FBQ2I7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsWUFBWTthQUNiO1NBQ0YsQ0FBQztPQUNXLFdBQVcsQ0FXdkI7SUFBRCxrQkFBQztDQUFBLEFBWEQsSUFXQztTQVhZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvb0NvbXBvbmVudCB9IGZyb20gJy4vZm9vL2Zvby5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFyU2VydmljZSB9IGZyb20gJy4vYmFyL2Jhci5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGb29Db21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEZvb0NvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE15TGliTW9kdWxlIHtcblxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE15TGliTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEJhclNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=