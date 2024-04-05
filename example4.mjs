import React from 'react';
import { ExtensionLibrary } from 'xcratch';

const imgData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAp0lEQVR42mL8//8/AyUYTFBeX1//fwYJAU8DfGTPvGMP//PxwYhEH///xw+QIYgDHH0f/O6YAJj+9DqRkJnXGQwAYQBwZ/mK7yMZpERSEB1GPAZH+xrcRJiBkYGBgAADLws7CcnLy+vR2GIM1rBAxEYlAATCI0Y4A0iAmjIwAZBgiAMhI6Aw0YiZI3DRiJkjcNGIkY3Z4aCDiRJkjeAAAAAElFTkSuQmCC";

const extension = {
    // ブロック定義
    blocks: [
        // ブロックの定義
        {
            opcode: 'sayHello',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Helloを言う',
            // 画像データを設定
            arguments: {},
            // 画像のURLを設定
            image: imgData,
        },
    ],
    // ブロックの定義
    sayHello: function () {
        console.log("Hello, Xcratch!");
    },
};

// 拡張機能の初期化
Scratch.extensions.register('Sample Extension', extension);

