import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth } from "../Firebase/configure";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      navigate("/", { replace: true });
      console.log(user);
    } catch (e) {
      alert(e.message);
    }
    setEmail("");
    setEmail("");
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithPopup(auth, provider);
      navigate("/", { replace: true });
      console.log(user);
    } catch (e) {
      alert(e.message);
    }
    setEmail("");
    setEmail("");
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="Password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Sign In
      </Button>
      <Button onClick={handleGoogle} variant="primary" type="submit">
        Sign In with Google
      </Button>
    </Form>
  );
}

export default Login;
