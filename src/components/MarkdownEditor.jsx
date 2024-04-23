import Window from "./Window";

function MarkdownEditor() {
    return (
        <div className="row markdown-container">
            <Window type='editor'>Editor</Window>
            <Window type='preview'>Preview</Window>
        </div>
    );
}

export default MarkdownEditor;