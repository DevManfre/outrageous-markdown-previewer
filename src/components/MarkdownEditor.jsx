import Window from "./Window";

function MarkdownEditor() {
    return (
        <div className="row markdown-container">
            <Window>editor</Window>
            <Window>preview</Window>
        </div>
    );
}

export default MarkdownEditor;