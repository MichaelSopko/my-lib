import * as tslib_1 from "tslib";
var MyLibModule_1;
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo/foo.component';
import { BarService } from './bar/bar.service';
let MyLibModule = MyLibModule_1 = class MyLibModule {
    static forRoot() {
        return {
            ngModule: MyLibModule_1,
            providers: [
                BarService
            ]
        };
    }
};
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
export { MyLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BteS9saWIvIiwic291cmNlcyI6WyJsaWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFhL0MsSUFBYSxXQUFXLG1CQUF4QixNQUFhLFdBQVc7SUFFZixNQUFNLENBQUMsT0FBTztRQUVuQixPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNULFVBQVU7YUFDWDtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVhZLFdBQVc7SUFYdkIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtTQUNiO1FBQ0QsWUFBWSxFQUFFO1lBQ1osWUFBWTtTQUNiO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsWUFBWTtTQUNiO0tBQ0YsQ0FBQztHQUNXLFdBQVcsQ0FXdkI7U0FYWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb29Db21wb25lbnQgfSBmcm9tICcuL2Zvby9mb28uY29tcG9uZW50JztcbmltcG9ydCB7IEJhclNlcnZpY2UgfSBmcm9tICcuL2Jhci9iYXIuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRm9vQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGb29Db21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNeUxpYk1vZHVsZSB7XG5cbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBNeUxpYk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBCYXJTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19