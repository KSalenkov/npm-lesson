import { Mouse } from "./types";
export declare class Particle {
    private readonly effect;
    private readonly color;
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
    constructor(effect: Effect, x: number, y: number, color: string);
    draw(context: CanvasRenderingContext2D): void;
    update(): void;
    warp(): void;
}
export declare class Effect {
    readonly width: number;
    readonly height: number;
    readonly image: HTMLImageElement;
    particlesArray: Particle[];
    centerX: number;
    centerY: number;
    x: number;
    y: number;
    gap: number;
    mouse: Mouse;
    constructor(width: number, height: number, image: HTMLImageElement);
    init(context: CanvasRenderingContext2D): void;
    draw(context: CanvasRenderingContext2D): void;
    update(): void;
    warp(): void;
}
