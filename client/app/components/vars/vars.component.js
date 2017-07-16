"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VarsComponent = (function () {
    //we inject varsService into ActorComponent
    function VarsComponent() {
        console.log("vars Component");
    }
    //initialize Actor Compoentn
    VarsComponent.prototype.ngOnInit = function () {
        this.getAllVars();
    };
    VarsComponent.prototype.getAllVars = function () {
        var _this = this;
        //getVars is an observable so we need to subscribe to it
        this.varsService.getVars().
            subscribe(function (vars) {
            _this.vars = vars;
        });
    };
    VarsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vars',
            templateUrl: 'vars.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], VarsComponent);
    return VarsComponent;
}());
exports.VarsComponent = VarsComponent;
//# sourceMappingURL=vars.component.js.map