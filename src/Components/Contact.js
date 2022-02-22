import React, { useState } from "react";
export default function Contact(props) {

    const [text, setText] = useState("");

    const handleSubmit = () => {
        if (text !== "") {
            // show alert
            props.showAlert("Your feedback is submitted", "success");
        }
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [myStyle, setMyStyle] = useState({
        color: "white",
        backgroundColor: "#13466e"
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
            <div
                className="container" style={myStyle} toggleStyle={toggleStyle}
            >
                <h2>{props.title}</h2>

                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleSubmit}>
                    Submit Feedback
                </button>
            </div>
        </>
    );
}
