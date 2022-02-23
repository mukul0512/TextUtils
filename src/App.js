import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import Contact from "./Components/Contact";
// import Login from "./Components/Login";
// import Register from "./Components/Register";
// import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-warning');
  // }

  // const toggleMode = (cls) => {
  //   removeBodyClasses();
  //   document.body.classList.add('bg-' + cls);
  //   setMode(cls);
  //   document.body.style.backgroundColor = cls;
  //   showAlert(cls + " mode has been enabled", cls);
  // };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
      {/* <Navbar/> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading=" Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
          mode={mode}
        />
        {/* <Routes>
          <Route path="/about" element={<About heading="About Text Utils" />} />
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading=" Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
                mode={mode}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                title="Contact Us"
                showAlert={showAlert}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                heading="User Login"
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                heading="User Information For Registration"
              />
            }
          />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
