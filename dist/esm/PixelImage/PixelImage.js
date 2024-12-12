import React, { useState } from "react";
import { styles } from "./styles";
import { Input } from "../Input/Input";
import { Graphics } from "../Graphics/Graphics";
export var PixelImage = function () {
    var _a = useState(null), imageSource = _a[0], setImageSource = _a[1];
    return (React.createElement("div", { style: styles.container },
        React.createElement(Input, { onChange: setImageSource }),
        imageSource && React.createElement(Graphics, { source: imageSource })));
};
//# sourceMappingURL=PixelImage.js.map