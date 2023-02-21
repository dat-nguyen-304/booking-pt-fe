import "./Login.css";
import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import jwt from "jsonwebtoken";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
function Login() {
  const [token, setToken] = useState("");
  const [redirect, setRedirect] = useState(null);
  useEffect(() => {
    async function callAPI() {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/auth/login",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const accessToken = res.data.tokens.accessToken;
        localStorage.setItem("accessToken", accessToken);
      } catch (error) {
        console.log("error: ", error);
      }
    }

    const navigate1 = () => {
        const accessToken = localStorage.getItem("accessToken");
        const decode = jwt.decode(accessToken);
        const role = decode.role;
        console.log(role)
        if (role === "admin") {
          setRedirect("/admin/dashboard");
        } else if (role === "user") {
          setRedirect("/pt/scheduled");
        } else {
          setRedirect("/");
        }
      };

    if (token) {
    callAPI();
    navigate1();
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
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6">
          <div className="d-flex flex-row ps-5 pt-3">
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: "#709085" }} />
            <span className="h1 fw-bold mb-0">PT-Booking</span>
          </div>

          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 ">
            <h3
              className="fw-normal mb-3 ps-5 pb-3"
              style={{ letterSpacing: "1px", marginLeft: "50px" }}
            >
              Log in
            </h3>

            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Email address"
              id="formControlLg"
              type="email"
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Password"
              id="formControlLg"
              type="password"
              size="lg"
            />

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color="info" size="lg">
              Login
            </MDBBtn>
            <MDBBtn
              className="mb-4 px-5 mx-5 w-100"
              size="lg"
              style={{ backgroundColor: "#dd4b39" }}
              onClick={signInWithGoogle}
            >
              <MDBIcon fab icon="google" className="mx-2" />
              Sign in with google
            </MDBBtn>
            <p className="small pb-lg-3" style={{ marginLeft: "100px" }}>
              <Link to="/reset">Forgot password?</Link>
            </p>
            <p className="ms-5">Don't have an account? Register here</p>
          </div>
        </MDBCol>

        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/boxer-exercising-with-punch-bag-royalty-free-image-685043825-1537211838.jpg?resize=1200:*"
            alt="Login"
            className="w-100"
            style={{
              objectFit: "cover",
              objectPosition: "left",
              height: "600px",
            }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
