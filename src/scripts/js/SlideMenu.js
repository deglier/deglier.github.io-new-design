define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SlideMenu = (function () {
        function SlideMenu(toggleClass, menuClass, isActive) {
            this.toggleClass = document.getElementById(toggleClass);
            this.menuClass = document.getElementById(menuClass);
            this.change = isActive ? isActive : 'is-active';
            this.addEvents(this.toggleClass);
        }
        SlideMenu.prototype.toggle = function () {
            this.toggleClass.classList.toggle(this.change);
            this.menuClass.classList.toggle(this.change);
        };
        SlideMenu.prototype.addEvents = function (arr) {
            var _this = this;
            var i;
            for (i = 0; i < arr.length; i++) {
                arr[i].addEventListener('click', function () { _this.toggle(); });
            }
        };
        return SlideMenu;
    }());
    exports.default = SlideMenu;
});
