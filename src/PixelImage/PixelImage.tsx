import React, {useState} from "react";
import {styles} from "./styles";
import {Input} from "../Input/Input";
import {Graphics} from "../Graphics/Graphics";

export const PixelImage: React.FC = () => {
    const [imageSource, setImageSource] = useState<Base64URLString | null>(null);

    return (
        <div style={styles.container}>
            <Input onChange={setImageSource} />

            {imageSource && <Graphics source={imageSource} />}
        </div>
    );
};
