import React, { useState } from 'react';
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () => {
        preText.push(text);
        setText(text.toUpperCase());
    }
    const handleDnClick = () => {
        preText.push(text);
        setText(text.toLowerCase());
    }
    const handleCapitalize = () => {
        preText.push(text);
        setText(text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
    }
    const handleCamelCase = () => {
        preText.push(text);
        setText(text.split(' ').map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join(''));

    }
    const handlePascalCase = () => {
        preText.push(text);
        setText(text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(''));

    }
    const handleSnakeCase = () => {
        preText.push(text);
        setText(text.split(' ').join('_'));

    }
    const handleOnChange = (event) => {
        preText.push(text);
        setText(event.target.value);
    }

    const handleUndo = () => {
        // set the text to the last item in the preText array
        if (preText.length > 0) {
            setText(preText.slice(-1)[0]);
            preText.pop();
        } else {
            setText('');
        }
    }

    const generateRandom = () => {
        const words = ['hello', 'world', 'how', 'are', 'you', "welcome", "this", "thing", "something", "great"];
        const num = Math.floor(Math.random() * (80 - 20 + 1)) + 20;
        let Text = "";
        for (let i = 0; i < num; i++) {
            const randomIndex = Math.floor(Math.random() * words.length);
            Text += words[randomIndex] + " ";
        }
        preText.push(text);
        setText(Text);

    }

    const [text, setText] = useState("");
    const [preText, previousText] = useState([text]);
    return (
        <>
            <div className="container">
                <label htmlFor="myBox"><h2>{props.heading}</h2></label>
                <textarea className={`form-control ${{"dark": 'bg-dark text-light',"light":"bg-light text-dark"}[props.mode]} my-3`} id="myBox" value={text} placeholder="Enter your text" onChange={handleOnChange} rows={props.rows}></textarea>
                <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary btn-block mx-2 my-1" onClick={handleDnClick}>Convert to Lowercase</button>
                <button className="btn btn-primary btn-block mx-2 my-1" onClick={generateRandom}>Generate Random</button>
                <button className="btn btn-primary btn-block mx-2 my-1" onClick={handleCapitalize}>Capitalize</button>
                <button className="btn btn-primary btn-block mx-2 my-1" onClick={handleCamelCase}>camelCase</button>
                <button className="btn btn-primary btn-block mx-2 my-1" onClick={handlePascalCase}>PascalCase</button>
                <button className="btn btn-primary btn-block mx-2 my-1" onClick={handleSnakeCase}>Snake_Case</button>
                <button className="btn btn-primary btn-block mx-2 my-1" onClick={handleUndo}>Undo</button>
            </div>
            <div className="container">
                <hr />
                <h2 className="my-3">Your text summary</h2>
                <p>{text.split(" ").length - 1} words | {text.length} characters</p>

                <p>Minutes to read: {(((text.length - 1) / 5) * 0.004).toFixed(2)}</p>
                <hr />
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview it here.."}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    text: PropTypes.string.isRequired,
    rows: PropTypes.string,
    heading: PropTypes.string,
    mode: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    rows: '5',
    text: "Enter the heading",
    heading: "Enter the heading"
}