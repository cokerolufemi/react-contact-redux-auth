import React from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import AllNewForm from "./AllNewForm";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { deleteUser } from "../actions/userActions";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../Firebase/configure";

function User({ userBio, updateUser }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const dispatch = useDispatch();

  const hadleDelete = async (e) => {
    e.preventDefault();
    // props.delete(props.userBio.id);
    // dispatch(deleteUser(props.userBio.id));
    await deleteDoc(doc(db, "contact", userBio.id));
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AllNewForm
            userBio={userBio}
            updateUser={updateUser}
            hide={handleClose}
          />
        </Modal.Body>
      </Modal>

      <Col md={3} style={{ width: "12rem", marginBottom: "10px" }}>
        <Card>
          <Card.Body>
            <Card.Title>Name:{userBio.name}</Card.Title>
            <Card.Subtitle className="mb=2 text-muted">
              Email:{userBio.email}
            </Card.Subtitle>
            <Card.Text>Gen:{userBio.gen}</Card.Text>
            <Button href="#" size="sm" variant="primary" onClick={handleShow}>
              Edit
            </Button>

            <Button href="#" size="sm" variant="danger" onClick={hadleDelete}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default User;
