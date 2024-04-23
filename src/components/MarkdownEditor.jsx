import autosize from "autosize";
import { useState } from "react";

function MarkdownEditor() {
    const [editorText, setEditorText] = useState(`## This is some markdown
### Consider making your own
    
#### List items
- George
 Paul
- Ringo
- John
    
#### Make it **bold** or make it *italic*
    
#### Create links [Github](https://github.com/devmanfre)`);
    const [previewText, setPreviewText] = useState('');

    function handleEditorChange(event) {
        setEditorText(event.target.value);
        autosize(event.target);
        setPreviewText(event.target.value);
    }

    function handlePreviewChange(event) {
        autosize(event.target)
    }

    return (
        <div className="row markdown-container">
            <div className="col">
                <h4><i className="bi bi-file-code"> </i>Editor</h4>
                <textarea id='editor' value={editorText} onInput={handleEditorChange} />
            </div>
            <div className="col">
                <h4><i className="bi bi-file-earmark"> </i>Preview</h4>
                <textarea id='preview' value={previewText} readOnly onChange={handlePreviewChange} />
            </div>
        </div>
    );
}

export default MarkdownEditor;