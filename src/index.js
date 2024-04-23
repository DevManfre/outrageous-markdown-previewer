import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import './static/css/style.css'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import MarkdownEditor from './components/MarkdownEditor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <h1>Markdown Previewer</h1>
        <p>by <a href="https://github.com/DevManfre">DevManfre</a></p>

        <MarkdownEditor />
    </React.StrictMode>
);