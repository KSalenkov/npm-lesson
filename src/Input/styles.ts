import {CSSProperties} from "react";

export const styles: Record<string, CSSProperties> = {
    container: {
        display: 'flex',
        alignItems: 'center',
        columnGap: 8,
        zIndex: 10,
    },
    input: {
        width: 'fit-content'
    },
    clear: {
        padding: '4px 8px',
        backgroundColor: 'salmon',
        borderRadius: 4,
        border: 'none',
    }
}
