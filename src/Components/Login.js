import React, { useState } from 'react';
import Alert from "./Alert";

const Login = (props) => {

    // Email property and setter
    const [email, setEmail] = useState("");
    // Password property and setter
    const [password, setPassword] = useState("");
    //Use for alert property
    const [alertData, setAlertData] = useState(null);

    const displayAlert = (msg, type) => {
        let alertData = {
            msg: msg,
            type: type
        }
        setAlertData(alertData);
        setTimeout(() => {
            setAlertData(null);
        }, 1500);
    }

    // Log In Button property
    const handleLogIn = () => {
        if (email === "") {
            displayAlert("Invalid Email", "danger")
            return
        }
        if (password === "") {
            displayAlert("Invalid Password", "danger")
            return
        }

        setEmail("");
        setPassword("");
        displayAlert("Login Success !!", "success")
    }

    const [myStyle, setMyStyle] = useState({
        color: "grey",
        // backgroundColor: "grey"
    });

    const toggleStyle = () => {
        if (myStyle.color === "grey") {
            setMyStyle({
                color: "khaki",
                // backgroundColor: "#042743",
                // border: "1px solid grey"
            });

        } else {
            setMyStyle({
                color: "grey",
                // backgroundColor: "grey"
            });
        }
    };

    return (
        <>
            <Alert alert={alertData} />
            <div style={myStyle} toggleStyle={toggleStyle}>
                <h2>{props.heading}</h2>
            </div>
            <div className="container">
                <input
                    type="email"
                    name="emailTextInput"
                    id="emailTextInput"
                    value={email}
                    placeholder={"Enter Email"}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
            </div>

            <div className="container my-3">
                <input
                    type="password"
                    name="passwordTextInput"
                    id="passwordTextInput"
                    value={password}
                    placeholder={"Enter Password"}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
            </div>

            <div className="container">
                <button type="submit" onClick={handleLogIn}>Log In</button>
            </div>
        </>
    )
}

export default Login;