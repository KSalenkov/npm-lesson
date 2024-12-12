"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Effect = exports.Particle = void 0;
var Particle = /** @class */ (function () {
    function Particle(effect, x, y, color) {
        this.effect = effect;
        this.color = color;
        this.x = Math.random() * this.effect.width;
        this.y = Math.random() * this.effect.height;
        this.originX = Math.floor(x);
        this.originY = Math.floor(y);
        this.size = this.effect.gap;
        this.vx = 0;
        this.vy = 0;
        this.friction = 0.95;
        this.ease = 0.2;
        this.dx = 0;
        this.dy = 0;
        this.distance = 0;
        this.force = 0;
        this.angle = 0;
    }
    Particle.prototype.draw = function (context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.size, this.size);
    };
    Particle.prototype.update = function () {
        this.dx = this.effect.mouse.x - this.x;
        this.dy = this.effect.mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        this.force = -this.effect.mouse.radius / this.distance;
        if (this.distance < this.effect.mouse.radius) {
            this.angle = Math.atan2(this.dy, this.dx);
            this.vx += this.force * Math.cos(this.angle);
            this.vy += this.force * Math.sin(this.angle);
        }
        this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
        this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
    };
    Particle.prototype.warp = function () {
        this.x = Math.random() * this.effect.width;
        this.y = Math.random() * this.effect.height;
        this.ease = 0.05;
    };
    return Particle;
}());
exports.Particle = Particle;
var Effect = /** @class */ (function () {
    function Effect(width, height, image) {
        var _this = this;
        this.width = width;
        this.height = height;
        this.image = image;
        this.particlesArray = [];
        this.centerX = this.width * 0.5;
        this.centerY = this.height * 0.5;
        this.x = this.centerX - this.image.width * 0.5;
        this.y = this.centerY - this.image.height * 0.5;
        this.gap = 3;
        this.mouse = {
            radius: 3000,
            x: undefined,
            y: undefined
        };
        window.addEventListener("mousemove", function (event) {
            _this.mouse.x = event.x;
            _this.mouse.y = event.y;
        });
    }
    Effect.prototype.init = function (context) {
        context.drawImage(this.image, this.x, this.y);
        var pixels = context.getImageData(0, 0, this.width, this.height).data;
        for (var y = 0; y < this.height; y += this.gap) {
            for (var x = 0; x < this.width; x += this.gap) {
                var index = ((y * this.width + x)) * 4;
                var red = pixels[index];
                var green = pixels[index + 1];
                var blue = pixels[index + 2];
                var alpha = pixels[index + 3];
                var color = "rgb(".concat(red, ",").concat(green, ",").concat(blue, ")");
                if (alpha > 0) {
                    this.particlesArray.push(new Particle(this, x, y, color));
                }
            }
        }
    };
    Effect.prototype.draw = function (context) {
        this.particlesArray.forEach(function (particle) { return particle.draw(context); });
    };
    Effect.prototype.update = function () {
        this.particlesArray.forEach(function (particle) { return particle.update(); });
    };
    Effect.prototype.warp = function () {
        this.particlesArray.forEach(function (particle) { return particle.warp(); });
    };
    return Effect;
}());
exports.Effect = Effect;
//# sourceMappingURL=effect.js.map