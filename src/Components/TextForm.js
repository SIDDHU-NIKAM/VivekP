import React, { useState } from "react";
// import Alert from "./Alert.js";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to UpperCase!", "success");
    // setText("You have clicked onChange");
  };

  const handleLowClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Text converted to LowerCase!", "success");
  }

  const handleClearText = () => {
      let newText = "";
      setText(newText);
      props.showAlert("Text cleared!", "success");
  }

  const handleCopy = () => {
    let text = document.getElementById('MyBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to ClipBoard!", "success");
  }

  const handleLorem = () => {
    setText("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // text = "Enter text here"; // Wrong method to set text
  // setText("Enter text here");   // Correct method to set text
  return (
    <>
      <div className="container" style={{backgroundColor: props.mode === 'dark' ? '#06354d' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}>
        <div className="mb-3">
          <label htmlFor="MyBox" className="form-label">
            <h2 className="mb-1">{props.heading}</h2>
          </label>
          <textarea
            className="form-control"
            id="MyBox"
            style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-1 my-1`} onClick={handleLorem}>
          Add Lorem
        </button>
        <button disabled = {text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-1 my-1`} onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled = {text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-1 my-1`} onClick={handleLowClick}>
            Convert to LowerCase
        </button>
        <button disabled = {text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-1 my-1`} onClick={handleCopy}>
            Copy Text
        </button>
        <button disabled = {text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-1 my-1`} onClick={handleClearText}>
            Clear Text
        </button>
      </div>

      <div className="container my-2" style={{backgroundColor: props.mode === 'dark' ? '#06354d' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}>
          <h2>Your Text Summary</h2>
          <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes to read</p>
          <h3>Preview</h3>
          <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>

      <marquee style = {{color: 'black'}}>
        <strong>
          Hope You Liked Our Site!
        </strong>
    </marquee>
    </>
  );
}
