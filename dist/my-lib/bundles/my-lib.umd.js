(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@my/lib', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global.my = global.my || {}, global.my.lib = {}), global.ng.core, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, function (exports, core, rxjs, operators, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    var BarService = /** @class */ (function () {
        function BarService() {
        }
        Object.defineProperty(BarService.prototype, "value", {
            get: function () {
                return rxjs.of(true).pipe(operators.map(function (val) { return "" + val; }));
            },
            enumerable: true,
            configurable: true
        });
        BarService = __decorate([
            core.Injectable()
        ], BarService);
        return BarService;
    }());

    var FooComponent = /** @class */ (function () {
        function FooComponent() {
        }
        FooComponent = __decorate([
            core.Component({
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
            core.NgModule({
                imports: [
                    common.CommonModule
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

    exports.BarService = BarService;
    exports.FooComponent = FooComponent;
    exports.MyLibModule = MyLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=my-lib.umd.js.map
