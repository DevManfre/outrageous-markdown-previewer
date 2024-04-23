import autosize from "autosize";
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from "react";

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

    function handleEditorChange(event) {
        setEditorText(event.target.value);
        autosize(event.target);
    }

    return (
        <div className="row markdown-container">
            <div className="col">
                <h4><i className="bi bi-file-code"> </i>Editor</h4>
                <textarea id='editor' value={editorText} onInput={handleEditorChange} />
            </div>
            <div className="col">
                <h4><i className="bi bi-file-earmark"> </i>Preview</h4>
                <hr/>
                <span id="preview">
                    <ReactMarkdown>
                        {editorText}
                    </ReactMarkdown>
                </span>
            </div>
        </div>
    );
}

export default MarkdownEditor;