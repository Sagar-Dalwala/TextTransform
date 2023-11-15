import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [changeText, setChangeText] = useState(0);

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        updateWordCount(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        updateWordCount(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleCapClick = () => {
        let newText = text.split(" ");
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        let newText2 = newText.join(" ");
        setText(newText2);
        updateWordCount(newText2);
        props.showAlert("Capitalized", "success");
    }

    const handleSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    const handleCopy = () => {
        let text=document.getElementById("textarea");
        text.select();

        if(navigator.clipboard && navigator.clipboard.writeText){
            navigator.clipboard.writeText(text.value)
            .then(()=>{
                props.showAlert("Copied to Clipboard", "success");
            })
            .catch((error)=>{
                props.showAlert("Failed to copy to Clipboard", "danger");
            });
        }
        else{   
            document.execCommand("copy");
            props.showAlert("Copied to Clipboard", "success");
        }
    }

    const handleClearClick = () => {
        let newText='';
        setText(newText);
        updateWordCount(newText);
        props.showAlert("Text Cleared", "success");
    }

    const updateWordCount = (newText) => {
        const wordCount = newText.split(" ").filter(word => word !== '').length;
        setChangeText(wordCount);
    }

    const handleOnChange = (event) => {
        const newText = event.target.value;
        setText(newText);
        updateWordCount(newText);
    }

    return (
        <>
            <div className={`container mt-4 mb-3 text-${props.mode==='light' ? 'dark' : 'light'}`}>
                <h1>{props.heading}</h1>
                <label htmlFor="textarea" className={`form-label`}>{props.entertext}</label>
                <textarea className={`form-control bg-${props.mode==='light' ? 'light' : 'dark'} text-${props.mode==='light' ? 'dark' : 'light'}`} id="textarea" rows="8" value={text} onChange={handleOnChange}></textarea>

                <div className="d-flex flex-row flex-wrap gap-3 mt-3">
                    <button className={`btn btn-${props.mode==='light' ? 'dark' : 'light'}`} onClick={handleUpClick}>Convert To Uppercase</button>
                    <button className={`btn btn-${props.mode==='light' ? 'dark' : 'light'}`} onClick={handleLoClick}>Convert To Lowercase</button>
                    <button className={`btn btn-${props.mode==='light' ? 'dark' : 'light'}`} onClick={handleCapClick}>Convert To Capitalize</button>
                    <button className={`btn btn-${props.mode==='light' ? 'dark' : 'light'}`} onClick={handleSpace}>Remove Extra Space</button>
                    <button className={`btn btn-${props.mode==='light' ? 'dark' : 'light'}`} onClick={handleCopy}>Copy to Clipboard</button>
                    <button className={`btn btn-${props.mode==='light' ? 'dark' : 'light'}`} onClick={handleClearClick}>Clear Text</button>
                </div>
            </div>

            <div className={`container text-start text-${props.mode==='light' ? 'dark' : 'light'}`}>
                <h3>Your Text Summary</h3>
                <p>{changeText} words and {text.length} characters.</p>
                <p>{(0.008 * changeText)} minutes about to read the text</p>
                <h4>Preview</h4>
                <p >{text.length>0 ? text : "Provide something to preview it here"}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    entertext: PropTypes.string.isRequired,
}

TextForm.defaultProps = {
    entertext: "Enter Your Text : "
}