"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PerfectScrollbarConfig = /** @class */ (function () {
    function PerfectScrollbarConfig(config) {
        if (config === void 0) { config = {}; }
        this.assign(config);
    }
    PerfectScrollbarConfig.prototype.assign = function (config) {
        if (config === void 0) { config = {}; }
        for (var key in config) {
            this[key] = config[key];
        }
    };
    return PerfectScrollbarConfig;
}());
exports.PerfectScrollbarConfig = PerfectScrollbarConfig;
//# sourceMappingURL=perfect-scrollbar.interfaces.js.map