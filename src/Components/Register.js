import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from "./Alert";

const Register = (props) => {

    let navigate = useNavigate()

    // First Name property and setter
    const [firstName, setFirstName] = useState("");
    // Last Name property and setter
    const [lastName, setLastName] = useState("");
    // Email property and setter
    const [email, setEmail] = useState("");
    // Password property and setter
    const [password, setPassword] = useState("");
    //Alert property
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

    // Register button property
    const handleRegister = () => {
        if (firstName === "") {
            displayAlert("First Name not mention", "danger")
            return
        }
        if (lastName === "") {
            displayAlert("Last Name not mention", "danger")
            return
        }
        if (email === "") {
            displayAlert("Invalid Email", "danger")
            return
        }
        if (password === "") {
            displayAlert("Invalid Password", "danger")
            return
        }

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        displayAlert("Registration Successfully Done !!", "success");
        navigate('/');
    }

    return (
        <>
            <div className="container my-3" style={{
                color: props.mode === "dark" ? "white" : "black"
            }}>
                <Alert alert={alertData} />
                <h2>{props.heading} </h2>
                <input
                    type="firstName"
                    name="firstNameTextInput"
                    id="firstNameTextInput"
                    value={firstName}
                    placeholder={"Enter First Name"}
                    onChange={(event) => {
                        setFirstName(event.target.value);
                    }}
                />
            </div>

            <div className="container my-3">
                <input
                    type="lastName"
                    name="lastNameTextInput"
                    id="lastNameTextInput"
                    value={lastName}
                    placeholder={"Enter Last Name"}
                    onChange={(event) => {
                        setLastName(event.target.value);
                    }}
                />
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
                <button type="submit" onClick={handleRegister}>Register</button>
            </div>

        </>
    )
}

export default Register;
