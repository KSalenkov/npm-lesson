"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creatGraphics = void 0;
var effect_1 = require("./effect");
var creatGraphics = function (canvas, image) {
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (ctx) {
        var effect_2 = new effect_1.Effect(canvas.width, canvas.height, image);
        effect_2.init(ctx);
        var animate_1 = function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            effect_2.draw(ctx);
            effect_2.update();
            requestAnimationFrame(animate_1);
        };
        animate_1();
        return function () { return effect_2.warp(); };
    }
    return function () { return null; };
};
exports.creatGraphics = creatGraphics;
//# sourceMappingURL=engin.js.map