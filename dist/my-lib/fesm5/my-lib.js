import { __decorate } from 'tslib';
import { Injectable, Component, NgModule } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

var BarService = /** @class */ (function () {
    function BarService() {
    }
    Object.defineProperty(BarService.prototype, "value", {
        get: function () {
            return of(true).pipe(map(function (val) { return "" + val; }));
        },
        enumerable: true,
        configurable: true
    });
    BarService = __decorate([
        Injectable()
    ], BarService);
    return BarService;
}());

var FooComponent = /** @class */ (function () {
    function FooComponent() {
    }
    FooComponent = __decorate([
        Component({
            selector: 'my-foo',
            template: '<h1>foo</h1>',
            styles: ["h1{color:#f0f}"]
        })
    ], FooComponent);
    return FooComponent;
}());

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
    MyLibModule = MyLibModule_1 = __decorate([
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

export { BarService, FooComponent, MyLibModule };
//# sourceMappingURL=my-lib.js.map
