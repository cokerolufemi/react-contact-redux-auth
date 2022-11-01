import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import AddUserForm from "../components/AddUserForm";
import AllUser from "../components/AllUser";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/configure";

function Home() {
  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <Container>
      <Row>
        <Col>
          <AddUserForm />
        </Col>
        <Col>
          <AllUser />
        </Col>
        <Button onClick={handleSignout} variant="danger">
          Logout
        </Button>
      </Row>
    </Container>
  );
}

export default Home;
