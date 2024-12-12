import {Effect} from "./effect";
import {Wrap} from "./types";

export const creatGraphics = (canvas: HTMLCanvasElement, image: HTMLImageElement): Wrap => {
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (ctx) {
        const effect = new Effect(canvas.width, canvas.height, image);
        effect.init(ctx);

        const animate = () => {
            ctx.clearRect(0,0, canvas.width, canvas.height);
            effect.draw(ctx);
            effect.update();
            requestAnimationFrame(animate);
        }

        animate();

        return () => effect.warp();
    }

    return () => null
}
