import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { db } from "../Firebase/configure";
import { doc, updateDoc } from "firebase/firestore";

function AllNewForm(props) {
  const [name, setName] = useState(props.userBio.name);
  const [gen, setGen] = useState(props.userBio.gen);
  const [email, setEmail] = useState(props.userBio.email);
  const [id, setId] = useState(props.userBio.id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let userData = { id, name, email, gen };
      const docRef = doc(db, "contact", props.userBio.id);
      await updateDoc(docRef, userData);
    } catch (error) {
      console.log(error);
    }
    setName("");
    setGen("");
    setEmail("");
    setId("");
    props.hide();
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
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
          <Form.Label>Gen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Password"
            value={gen}
            onChange={(e) => {
              setGen(e.target.value);
            }}
          />
        </Form.Group>

        <Button onClick={handleSubmit} variant="primary" type="submit">
          SUBMIT
        </Button>
      </Form>
    </div>
  );
}

export default AllNewForm;
