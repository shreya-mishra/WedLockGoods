import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../../actions/UserActions";
import FormContainer from "../../../FormContainer/FormContainer";
import Loader from "../../Loader/Loader";
import Message from "../../Message/Message";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <div style={{ height: "30px" }} />

        <Button type='submit' varient='primary'>
          Sign In
        </Button>
        <div style={{ height: "30px" }} />
        <Button
          varient='primary'
          onClick={() => {
            setPassword("12345");
            setEmail("guest@gmail.com");
          }}>
          Guest Creds
        </Button>
      </Form>

      <Row className='py-4'>
        <Col>
          New Customer?
          <Link
            to={redirect ? `/register?redirect=${redirect}` : "/register"}
            style={{ textDecoration: "none" }}>
            Sign Up
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
