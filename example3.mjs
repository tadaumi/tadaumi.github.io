// chatgpt_extension.mjs

const chatGPTIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB/klEQVR42mJ8d+/PXB3PsP7H3/36jHf/6nN9f+dd4x9+miuM/31+lzy6f3Y5eu0+Z/f9en/kO/z8/2fb5nBx91fyP/i2+Ov41+/7HPJfd+4+v+9vn/4tf+/ovn/9/e/u7P6jvzq+9f3xg/+4fX9rJ/+ivV9f2Nvr/q+39g+//7pvZ6/+/rvT6+/oCwF4oPv//0x6f99/u7Y5+7D+f4L+v/0/n/+vTv7/PbO/vv7tKv+/oJ/98/vl/Lf5+gv+/d///T/yf1H+rD+tFf+x5h+pvP/P1+UHh8fHQ+P///+bD///3/b77/wMH///3/MrY/6v7/PXtBx//8+nzAf///DnB/fu/3+fn/+LvYQv///9fx+f7B9P//fwj//38of9n9f/2/3T9/f9gwJwDkC1l9fX/pF/59fr//v78E/4bG9vb/vyjF/+76zP7//v/G8Pv/zJ+/+87+4P///K8i8f9Bn///+tgE7Gdn//34/j//8PnB/fv/sfP9+vz+YGfn/vs3l9+tn+P//3x//+5Hv//n8D0Kgfw3tfR///lFk9n9/fPn9/9/+Hh/Wfnz/+/7+Q/4fT4Cfv4/X3/+/oCovL8x///BPf9+fqeL++fn7+7D//////AwP/8/vX9/f///f4L/6v7/+Hh+7D/////5xf//9+fqeB+fn/+5P///6/8/f1//v/8+f7+P/9/fv//////3//f///+Hh//7/8/f3+///3/f//6+/r+8P//w8WvL9/f//v8P//v/9///+8P//w8P//v/8///+8f///f/+v///3///8///////f//v//////9//////9//////9/////v//////9//8GBXbwj7T5AAAAAElFTkSuQmCC";

class ChatGPTExtension {
    getInfo() {
        return {
            "id": "chatgpt",
            "name": "ChatGPT Extension",
            "blocks": [
                {
                    "opcode": "getChatResponse",
                    "blockType": "command",
                    "text": "Get ChatGPT response for [text]",
                    "arguments": {
                        "text": {
                            "type": "string",
                            "defaultValue": "Hello"
                        }
                    }
                }
            ],
            "menus": {
                "model": {
                    "acceptReporters": true,
                    "items": [
                        {
                            "text": "Text Davinci",
                            "value": "text-davinci-002"
                        },
                        {
                            "text": "Davinci Codex",
                            "value": "davinci-codex-002"
                        }
                        // 他のモデルを追加できます
                    ]
                }
            },
            "blocksImages": {
                "chatgpt": chatGPTIcon
            }
        };
    }

    getChatResponse({ text }) {
        const url = 'https://api.openai.com/v1/completions';
        const apiKey = 'YOUR_API_KEY'; // あなたのOpenAI APIキーを設定してください

        const requestBody = {
            model: "text-davinci-002", // ChatGPTのモデルを選択してください
            prompt: text,
            max_tokens: 50
        };

        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody)
        })
        .then(response => {
		      if (!response.ok) {
		          throw new Error('Network response was not ok');
		      }
		      return response.json();
					})
				.then(responseData => responseData.choices[0].text.trim())
				.catch(error => {
				    console.error('Error fetching data:', error);
				    throw error;
				}
		);
}

function register() {
    return new ChatGPTExtension();
}

