import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './index.css';

const Editor = () => {
    const [value, setValue] = useState('');
    const [isConverted, setIsConverted] = useState(false);

    const onChange = (content, delta, source, editor) => {
        const text = editor.getHTML(content);
        setValue(text);
    }

    const handleConversion = () => {
        setIsConverted(true);
    }

    const toolbarOptions = [
        [
            'bold',
            'italic',
            'underline',
            'strike',
            { 'color': [] }, { background: [] },
            { 'align': "" }, { 'align': "center" }, { 'align': "right" }, { 'align': "justify" },
            { 'size': [] }
        ],
    ];

    return (
        <div id="editor">
            <h1>Text Editor</h1>
            <ReactQuill value={value} modules={{ toolbar: toolbarOptions }} onChange={onChange} />
            <button id="button" onClick={handleConversion} >Convert</button>
            <div id="output">{isConverted && value}</div>
        </div>
    )
}

export default Editor;