import React from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import "./Registration.css";

const Registration = () => {
  const {
    handleGoogleSignIn,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleRetypePasswordChange,
    handleRegistration,
    loading,
    error,
  } = UseAuth();

  return (
    <>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <div className="container d-flex justify-content-center width background-color border-shadow mt-5 text-white">
          <div className="p-5">
            <div className="text-center">
              <h1 className=" text-bold mb-5">
                Please Register for an Account
              </h1>
              <div className="authentication-icon my-3 bg-white rounded-pill">
                <i
                  onClick={handleGoogleSignIn}
                  className="fab fa-google-plus-g p-3 text-danger"
                ></i>

                <i className="fab fa-facebook-square p-3 text-primary"></i>

                <i className="fab fa-linkedin p-3 text-info"></i>
              </div>
              <p>or use email for register</p>
            </div>

            <Form onSubmit={handleRegistration}>
              <Form.Group className="mb-3" controlId="text">
                <Form.Label className="fw-bold">Name:</Form.Label>
                <Form.Control
                  onBlur={handleNameChange}
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Email address:</Form.Label>
                <Form.Control
                  onBlur={handleEmailChange}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold">Password:</Form.Label>
                <Form.Control
                  onBlur={handlePasswordChange}
                  name="password1"
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold">Retype Password:</Form.Label>
                <Form.Control
                  onBlur={handleRetypePasswordChange}
                  name="password2"
                  type="password"
                  placeholder="Confirmed Password"
                  required
                />
              </Form.Group>
              <p className="text-danger">{error}</p>

              <Button
                // variant="warning"
                className="px-5 py-2 fw-bold btn brdr font-color5"
                type="submit"
              >
                Register
              </Button>
            </Form>
            <p className="text-center text-warning pt-3 m-0 fw-bold">
              already have an account?
              <Link to="/login" className="text-white">
                login
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Registration;
