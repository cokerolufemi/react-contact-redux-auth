import React from "react";
import User from "./User";
import { Row, Container } from "react-bootstrap";

import { useSelector } from "react-redux";
function AllUser(props) {
  const { contacts } = useSelector((state) => {
    return state.contactReducer;
  });
  return (
    <Container>
      <Row>
        {contacts.map((item, index) => {
          return (
            <User
              key={index}
              userBio={item}
              delete={props.delete}
              editUser={props.editUser}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default AllUser;
