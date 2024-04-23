function Window({ children }) {
    let isEditor = children == 'editor';

    return (
        <div className="col">
            <h4>
                {isEditor ? <i class="bi bi-file-code"> </i> : <i class="bi bi-file-earmark"> </i>}
                {children.charAt(0).toUpperCase() + children.slice(1)}
            </h4>
            {isEditor ? <textarea id='editor' /> : <input type="text" />}
        </div>
    );
}

export default Window;