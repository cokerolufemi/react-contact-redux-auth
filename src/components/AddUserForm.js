import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/configure";
import { uuidv4 } from "@firebase/util";

function AddUserForm(props) {
  const [name, setName] = useState("");
  const [gen, setGen] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let contact = {
      name,
      gen,
      email,
      id: uuidv4(),
    };
    console.log(contact.id);
    await setDoc(doc(db, "contact", contact.id), contact);
    // props.addUser({ name, gen, email, id: Math.floor(Math.random() * 2000) });
    setName("");
    setGen("");
    setEmail("");
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
          <Form.Label>Email Address</Form.Label>
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

        <Button onClick={handleSubmit} classvariant="primary" type="submit">
          SUBMIT
        </Button>
      </Form>
    </div>
  );
}

// const mapDispatchToProps = { addUser: addUser };

// export default connect(null, mapDispatchToProps)(AddUserForm);
export default AddUserForm;
