import "./Login.css";
import { Container, Row, Col, Input, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import jwt from "jsonwebtoken";
import axios from "axios";

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
      } 
      else {
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
    <Container fluid>
      <Row>
        <Col sm="6">
          <div className="d-flex flex-row ps-5 pt-3">
            <FontAwesomeIcon
              icon={faCrow}
              className="me-3"
              style={{ color: "#709085", fontSize: "3rem" }}
            />
            <span className="h1 fw-bold mb-0">PT-Booking</span>
          </div>

          <div className="d-flex flex-column justify-content-center h-custom-2 w-75">
            <h3
              className="fw-normal mb-3 ps-5 pb-3"
              style={{ letterSpacing: "1px", marginLeft: "50px" }}
            >
              Log in
            </h3>

            <Input
              className="mb-4 mx-5 w-100"
              type="email"
              bsSize="lg"
              placeholder="Email address"
            />
            <Input
              className="mb-4 mx-5 w-100"
              type="password"
              bsSize="lg"
              placeholder="Password"
            />

            <Button className="mb-4 px-5 mx-5 w-100" color="info" size="lg">
              Login
            </Button>
            <Button
              className="mb-4 px-5 mx-5 w-100"
              size="lg"
              style={{ backgroundColor: "#dd4b39" }}
              onClick={signInWithGoogle}
            >
              <FontAwesomeIcon icon={faGoogle} className="mx-2" />
              Sign in with google
            </Button>
            <div className="text-center">
              <p className="small pb-lg-3">
                <Link to="/reset">Forgot password?</Link>
              </p>
              <p className="ms-5">Don't have an account? Register here</p>
            </div>
          </div>
        </Col>

        <Col sm="6" className="d-none d-sm-block px-0">
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
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
