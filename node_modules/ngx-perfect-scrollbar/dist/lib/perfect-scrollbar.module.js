"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var perfect_scrollbar_component_1 = require("./perfect-scrollbar.component");
var perfect_scrollbar_directive_1 = require("./perfect-scrollbar.directive");
var perfect_scrollbar_interfaces_1 = require("./perfect-scrollbar.interfaces");
exports.PERFECT_SCROLLBAR_GUARD = new core_1.InjectionToken('PERFECT_SCROLLBAR_GUARD');
exports.PERFECT_SCROLLBAR_CONFIG = new core_1.InjectionToken('PERFECT_SCROLLBAR_CONFIG');
var PerfectScrollbarModule = /** @class */ (function () {
    function PerfectScrollbarModule(guard) {
    }
    PerfectScrollbarModule.forRoot = function (config) {
        return {
            ngModule: PerfectScrollbarModule,
            providers: [
                {
                    provide: exports.PERFECT_SCROLLBAR_GUARD,
                    useFactory: provideForRootGuard,
                    deps: [
                        [
                            perfect_scrollbar_interfaces_1.PerfectScrollbarConfig,
                            new core_1.Optional(),
                            new core_1.SkipSelf()
                        ]
                    ]
                },
                {
                    provide: exports.PERFECT_SCROLLBAR_CONFIG,
                    useValue: config ? config : {}
                },
                {
                    provide: perfect_scrollbar_interfaces_1.PerfectScrollbarConfig,
                    useFactory: provideDefaultConfig,
                    deps: [
                        exports.PERFECT_SCROLLBAR_CONFIG
                    ]
                }
            ]
        };
    };
    PerfectScrollbarModule.forChild = function () {
        return {
            ngModule: PerfectScrollbarModule
        };
    };
    PerfectScrollbarModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [perfect_scrollbar_component_1.PerfectScrollbarComponent, perfect_scrollbar_directive_1.PerfectScrollbarDirective],
                    exports: [common_1.CommonModule, perfect_scrollbar_component_1.PerfectScrollbarComponent, perfect_scrollbar_directive_1.PerfectScrollbarDirective]
                },] },
    ];
    /** @nocollapse */
    PerfectScrollbarModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [exports.PERFECT_SCROLLBAR_GUARD,] },] },
    ]; };
    return PerfectScrollbarModule;
}());
exports.PerfectScrollbarModule = PerfectScrollbarModule;
function provideForRootGuard(config) {
    if (config) {
        throw new Error("\n      Application called PerfectScrollbarModule.forRoot() twice.\n      For submodules use PerfectScrollbarModule.forChild() instead.\n    ");
    }
    return 'guarded';
}
exports.provideForRootGuard = provideForRootGuard;
function provideDefaultConfig(config) {
    return new perfect_scrollbar_interfaces_1.PerfectScrollbarConfig(config);
}
exports.provideDefaultConfig = provideDefaultConfig;
//# sourceMappingURL=perfect-scrollbar.module.js.map