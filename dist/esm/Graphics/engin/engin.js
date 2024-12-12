import { Effect } from "./effect";
export var creatGraphics = function (canvas, image) {
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (ctx) {
        var effect_1 = new Effect(canvas.width, canvas.height, image);
        effect_1.init(ctx);
        var animate_1 = function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            effect_1.draw(ctx);
            effect_1.update();
            requestAnimationFrame(animate_1);
        };
        animate_1();
        return function () { return effect_1.warp(); };
    }
    return function () { return null; };
};
//# sourceMappingURL=engin.js.map