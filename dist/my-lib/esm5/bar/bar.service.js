import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
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
    BarService = tslib_1.__decorate([
        Injectable()
    ], BarService);
    return BarService;
}());
export { BarService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbXkvbGliLyIsInNvdXJjZXMiOlsiYmFyL2Jhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3JDO0lBQUE7SUFNQSxDQUFDO0lBSkMsc0JBQUksNkJBQUs7YUFBVDtZQUNFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFHLEdBQUssRUFBUixDQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBSlUsVUFBVTtRQUR0QixVQUFVLEVBQUU7T0FDQSxVQUFVLENBTXRCO0lBQUQsaUJBQUM7Q0FBQSxBQU5ELElBTUM7U0FOWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhclNlcnZpY2Uge1xuXG4gIGdldCB2YWx1ZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBvZih0cnVlKS5waXBlKG1hcCh2YWwgPT4gYCR7dmFsfWApKTtcbiAgfVxuXG59XG4iXX0=