"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixelImage = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styles_1 = require("./styles");
var Input_1 = require("../Input/Input");
var Graphics_1 = require("../Graphics/Graphics");
var PixelImage = function () {
    var _a = (0, react_1.useState)(null), imageSource = _a[0], setImageSource = _a[1];
    return (react_1.default.createElement("div", { style: styles_1.styles.container },
        react_1.default.createElement(Input_1.Input, { onChange: setImageSource }),
        imageSource && react_1.default.createElement(Graphics_1.Graphics, { source: imageSource })));
};
exports.PixelImage = PixelImage;
//# sourceMappingURL=PixelImage.js.map