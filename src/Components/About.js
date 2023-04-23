import React from "react";

export default function About(props) {
  return (
    <div className="container" style={{backgroundColor: props.mode === 'dark' ? '#06354d' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h2>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{backgroundColor: props.mode === 'dark' ? '#06354d' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={{backgroundColor: props.mode === 'dark' ? '#06354d' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
          >
            <div className="accordion-body">
              TextUtils gives you a way to analyse your text quickly and efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{backgroundColor: props.mode === 'dark' ? '#06354d' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={{backgroundColor: props.mode === 'dark' ? '#06354d' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
          >
            <div className="accordion-body">
              TextUtils is a free character counter tool that provide instant charcter count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word / character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{backgroundColor: props.mode === 'dark' ? '#06354d' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={{backgroundColor: props.mode === 'dark' ? '#06354d' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
          >
            <div className="accordion-body">
              This word counter software works in any web browser such as Chrome, FireFox, Internet Explorer, Safari, etc. It suits to count characters in FaceBook, Blog, Books, Excel Document, PDF Document, Essays, etc.
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
