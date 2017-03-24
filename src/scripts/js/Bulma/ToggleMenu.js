define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ToggleMenu = (function () {
        function ToggleMenu(toggleId, menuId, isActive) {
            this.toggleId = document.getElementById(toggleId);
            this.menuId = document.getElementById(menuId);
            this.change = isActive ? isActive : 'is-active';
            this.addEvents(this.toggleId);
        }
        ToggleMenu.prototype.toggle = function () {
            this.toggleId.classList.toggle(this.change);
            this.menuId.classList.toggle(this.change);
        };
        ToggleMenu.prototype.addEvents = function (id) {
            var _this = this;
            id.addEventListener('click', function () { _this.toggle(); });
        };
        return ToggleMenu;
    }());
    exports.default = ToggleMenu;
});
