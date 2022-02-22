import React, { useState } from "react";

export default function About(props) {
  // const myStyle = {
  //     color: '#042743',
  //     backgroundColor: 'grey'
  // }

  // const setMyStyle = () => {
  //     myStyle = {
  //         color: 'grey',
  //         backgroundColor: '#042743'
  //     }
  // }

  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "#13466e",
  });

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "grey",
        backgroundColor: "#042743",
        border: "1px solid grey"
      });

    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "#13466e"
      });

    }
  };

  return (
    <>
      <div className="container" style={myStyle} toggleStyle={toggleStyle}>
        <h2 className="my-3">{props.heading} </h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne" style={myStyle}>
              <button
                className="accordion-button"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyze Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or remove extra spaces.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free To Use</strong>
              </button>
            </h2>

            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils is a free character count tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with words/ character limit.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>

            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browser such as Chrome, Firefox, Safari, Internet Explorer, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
              </div>
            </div>
          </div>

          {/* <div className="container my-3" style={myStyle}>
            <button
              onClick={toggleStyle}
              type="button"
              className="btn btn-primary"
            >
              {btnText}
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}
