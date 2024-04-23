import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import './static/css/style.css'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import Title from './components/Title';
import MarkdownEditor from './components/MarkdownEditor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Title />
        <MarkdownEditor />
    </React.StrictMode>
);