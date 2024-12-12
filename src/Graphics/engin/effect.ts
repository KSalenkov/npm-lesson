import {Mouse} from "./types";

export class Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    size: number;
    vx: number;
    vy: number;
    friction: number;
    ease: number;
    dx: number;
    dy: number;
    distance: number;
    force: number;
    angle: number;
    constructor(private readonly effect: Effect, x: number, y: number, private readonly color: string) {
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

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.size, this.size);
    }

    update() {
        this.dx = this.effect.mouse.x! - this.x;
        this.dy = this.effect.mouse.y!  - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        this.force = -this.effect.mouse.radius / this.distance;

        if (this.distance < this.effect.mouse.radius) {
            this.angle = Math.atan2(this.dy, this.dx);
            this.vx += this.force * Math.cos(this.angle);
            this.vy += this.force * Math.sin(this.angle);
        }

        this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
        this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
    }

    warp() {
        this.x = Math.random() * this.effect.width;
        this.y = Math.random() * this.effect.height;
        this.ease = 0.05;
    }
}
export class Effect {
    particlesArray: Particle[];
    centerX: number;
    centerY: number;
    x: number;
    y: number;
    gap: number;
    mouse: Mouse;

    constructor(
            readonly width: number,
            readonly height: number,
            readonly image: HTMLImageElement
    ) {
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
        }
        window.addEventListener("mousemove", event => {
            this.mouse.x = event.x;
            this.mouse.y = event.y;
        })
    }

    init(context: CanvasRenderingContext2D) {
        context.drawImage(this.image, this.x, this.y);
        const pixels = context.getImageData(0,0, this.width, this.height).data;
        for (let y = 0; y < this.height; y += this.gap) {
            for (let x = 0; x < this.width; x += this.gap) {
                const index = ((y * this.width + x)) * 4;
                const red = pixels[index];
                const green = pixels[index + 1];
                const blue = pixels[index + 2];
                const alpha = pixels[index + 3];
                const color = `rgb(${red},${green},${blue})`;

                if (alpha > 0) {
                    this.particlesArray.push(new Particle(this, x, y, color))
                }
            }
        }
    }

    draw(context: CanvasRenderingContext2D) {
        this.particlesArray.forEach((particle) => particle.draw(context));
    }

    update() {
        this.particlesArray.forEach((particle) => particle.update());
    }

    warp() {
        this.particlesArray.forEach((particle) => particle.warp());
    }
}
