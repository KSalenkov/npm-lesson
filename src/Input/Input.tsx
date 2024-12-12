import React, {ChangeEvent, useRef} from "react";
import {styles} from "./styles"

interface InputProps {
    onChange?: (imageSrc: string | null) => void;
}
export const Input: React.FC<InputProps> = ({onChange}) => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleClear = () => {
        if (inputRef.current && "value" in inputRef.current) {
            onChange?.(null)
            inputRef.current.value = "";
        }
    }
    const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                const result = reader.result as string;

                onChange?.(result)
            };

            reader.onerror = () => {
                console.error("Error reading file.");
                handleClear()
            };

            reader.readAsDataURL(file);
        } else {
            handleClear()
        }
    }

    return (
        <div style={styles.container}>
            <input ref={inputRef} type={"file"} style={styles.input} accept={"image/*"} onChange={handleChangeFile} />

            <button style={styles.clear} onClick={handleClear}>
                Clear
            </button>
        </div>
    );
};
