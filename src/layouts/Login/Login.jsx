import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import jwt from "jsonwebtoken";
import axios from "axios";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function Login() {
  const [token, setToken] = useState("");
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    async function callAPI() {
      try {
        const res = await axios.post(
          "https://gachateambe.herokuapp.com/api/auth/login",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const accessToken = res.data.tokens.accessToken;
        const refreshToken = res.data.tokens.refreshToken;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        navigate1();
      } catch (error) {
        console.log("error: ", error);
      }
    }

    const navigate1 = () => {
      const accessToken = localStorage.getItem("accessToken");
      const decode = jwt.decode(accessToken);
      const role = decode && decode.role;
      if (role === "admin") {
        setRedirect("/admin/dashboard");
      } else if (role === "pt") {
        setRedirect("/pt/scheduled");
      } else if (role === "user") {
        setRedirect("/user/home");
      } else {
        setRedirect("/");
      }
    };

    if (token) {
      callAPI();
    } else {
      const isLoggin = localStorage.getItem("accessToken");
      if (isLoggin) {
        const role = jwt.decode(isLoggin).role;
        if (role === "admin") {
          setRedirect("/admin/dashboard");
        } else if (role === "pt") {
          setRedirect("/pt/scheduled");
        } else if (role === "user") {
          setRedirect("/user/home");
        }
      }
    }
  }, [token]);

  const signInWithGoogle = () => {

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((userCred) => {
      console.log("userCred.user.accessToken: ", userCred.user.accessToken);
      setToken(userCred.user.accessToken);
    });
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div>
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundImage: 'url("images/bg-01.jpg")' }}
        >
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
              <span className="login100-form-title p-b-49">Login</span>
              <div
                className="wrap-input100 m-b-23"
              >
                <span className="label-input100">Username</span>
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="Type your username"
                />
              </div>
              <div
                className="wrap-input100"
              >
                <span className="label-input100">Password</span>
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Type your password"
                />
              </div>
              <div className="text-right p-t-8 p-b-31">

              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="login100-form-btn">Login</button>
                </div>
              </div>
              <div className="txt1 text-center p-t-30 p-b-20">
                <span>Or Sign In Using</span>
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="login100-form-btn" onClick={signInWithGoogle}>
                  <FontAwesomeIcon icon={faGoogle} className="mx-2" /> Login with Google</button>
                </div>
              </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Login;
