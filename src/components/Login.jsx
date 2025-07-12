import React, { useRef, useState } from "react";
import Header from "./Header";
import { Form } from "react-router-dom";
import "./Login.css";
import { checkValidData } from "./utiils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./utiils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    // checkValidData(email, password);
    console.log(email.current.value);
    console.log(password.current.value);
    // console.log(name);

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;
    // Sign in sign up logic
    if(!isSignInForm) {
      console.log("Ibide if");
      
     createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
     .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
     })
     .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode +"-" +errorMessage)
     })
    }
  };
  return (
    <>
      <Header />
      <div className="login-container">
        {/* <img style={{position: "absolute", top: 0}} src='https://wallpapers.com/images/file/netflix-background-gs7hjuwvv2g0e9fj.jpg' alt='logo' /> */}
        <form onSubmit={(e) => e.preventDefault()} className="login-form">
          <h1 className="Signin">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && (
            <input ref={name} type="text" placeholder="Full Name" className="login-name" />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="login-email"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="login-password"
          />
          <p className="error-msg">{errorMessage}</p>
          <button className="login-button" onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="Signup-container" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In now."}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
