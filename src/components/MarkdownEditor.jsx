import autosize from "autosize";
import ReactMarkdown from 'react-markdown';
import { useState } from "react";

function MarkdownEditor() {
    const [editorText, setEditorText] = useState(
        `# This is markdown
## Consider making your own
### Create links [Github](https://github.com/devmanfre)
#### List items
- First element of the list
- Make it **bold** or make it *italic*
- And this is an \`inline code\`.

\`\`\`this_is_a = "block of code"\`\`\`
> This is a blockquote created with >.`
    );

    function handleEditorChange(event) {
        setEditorText(event.target.value);
        autosize(event.target);
    }

    return (
        <div className="row markdown-container">
            <div className="col">
                <h4 className="title"><i className="bi bi-file-code"> </i>Editor</h4>
                <textarea id='editor' spellcheck="false" className="markdown" value={editorText} onInput={handleEditorChange} />
            </div>
            <div className="col">
                <h4 className="title"><i className="bi bi-file-earmark"> </i>Preview</h4>
                <div id="preview" className="markdown">
                    <ReactMarkdown>
                        {editorText}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
}

export default MarkdownEditor;