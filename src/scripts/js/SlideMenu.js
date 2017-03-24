define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SlideMenu = (function () {
        /**
         *
         * @param toggleMenu Classe reponsável por fazer a troca entre menu aberto e menu fechado
         * @param container Elemento que receberá/será removida a classe do estado do menu
         */
        function SlideMenu(toggleMenu, container, changeMenu) {
            var _this = this;
            this.toggleMenu = document.querySelectorAll(toggleMenu);
            this.container = document.querySelector(container);
            this.changeMenu = changeMenu;
            var i;
            for (i = 0; i < this.toggleMenu.length; i++) {
                this.toggleMenu[i].addEventListener('click', function () {
                    _this.menuAction(_this.container, _this.changeMenu);
                });
            }
            console.log(this.changeMenu);
        }
        SlideMenu.prototype.menuAction = function (container, changeMenu) {
            // let container = e.path[1]
            console.log(container);
            if (container.classList.contains(changeMenu)) {
                container.classList.remove(changeMenu);
            }
            else {
                container.classList.add(changeMenu);
            }
        };
        return SlideMenu;
    }());
    exports.default = SlideMenu;
});
