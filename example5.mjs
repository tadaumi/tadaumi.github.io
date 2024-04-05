import Scratch from 'scratch-client';
import Extension from 'scratch-extension';

class SampleExtension extends Extension {
    constructor(runtime) {
        super(runtime);
    }

    getInfo() {
        return {
            id: 'sample',
            name: 'Sample Extension',
            blocks: [
                {
                    opcode: 'sayHello',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'say hello',
                    arguments: {},
                }
            ],
            menus: {
                myMenu: [
                    {text: 'Option 1', value: 'OPTION1'},
                    {text: 'Option 2', value: 'OPTION2'},
                    {text: 'Option 3', value: 'OPTION3'}
                ]
            }
        };
    }

    sayHello() {
        alert("Hello, Xcratch!");
    }
}

export default SampleExtension;

