import autosize from "autosize";
import { useEffect, useState } from "react";

function Window({ children }) {
    let isEditor = children === 'editor';

    const [editorText, setEditorText] = useState(`## This is some markdown
### Consider making your own
    
#### List items
- George
 Paul
- Ringo
- John
    
#### Make it **bold** or make it *italic*
    
#### Create links [Github](https://github.com/devmanfre)`);

    function handleEditorInput(event) {
        setEditorText(event.target.value);
        autosize(event.target)
    }

    return (
        <div className="col">
            <h4>
                {isEditor ? <i className="bi bi-file-code"> </i> : <i className="bi bi-file-earmark"> </i>}
                {children.charAt(0).toUpperCase() + children.slice(1)}
            </h4>
            <textarea id={children}
                value={editorText}
                onInput={isEditor ? handleEditorInput : undefined}
                readOnly={!isEditor}
            />
        </div>
    );
}

export default Window;