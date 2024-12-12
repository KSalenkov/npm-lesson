import React, {SyntheticEvent, useRef} from "react";
import {styles} from "./styles";
import {creatGraphics} from "./engin/engin";

interface GraphicsProps {
    source: Base64URLString;
}

export const Graphics: React.FC<GraphicsProps> = ({source}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);

    const wrapRef = useRef<(() => void) | null>(null);

    const onImageLoad = (event: SyntheticEvent<HTMLImageElement>) => {
        const image = event.currentTarget;

        if (canvasRef.current) {
            wrapRef.current = creatGraphics(canvasRef.current!, image)
        }
    }

    const handleWrap = () => {
        if (wrapRef.current) {
            wrapRef.current()
        }
    }

    return (
        <div style={styles.container}>
            <button onClick={handleWrap} style={styles.wrap}>Wrap</button>

            <img ref={imageRef} style={styles.image} src={source} onLoadCapture={onImageLoad}  alt={''}/>

            <canvas ref={canvasRef} style={styles.canvas}></canvas>
        </div>
    );
};
