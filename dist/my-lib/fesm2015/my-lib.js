import { __decorate } from 'tslib';
import { Injectable, Component, NgModule } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

let BarService = class BarService {
    get value() {
        return of(true).pipe(map(val => `${val}`));
    }
};
BarService = __decorate([
    Injectable()
], BarService);

let FooComponent = class FooComponent {
};
FooComponent = __decorate([
    Component({
        selector: 'my-foo',
        template: '<h1>foo</h1>',
        styles: ["h1{color:#f0f}"]
    })
], FooComponent);

var MyLibModule_1;
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

export { BarService, FooComponent, MyLibModule };
//# sourceMappingURL=my-lib.js.map
