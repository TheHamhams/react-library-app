import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserBooksTable } from "../UserBooksTable";
import { Container } from "react-bootstrap";

export const Profile = () => {
  const { user } = useAuth0();

  if (!user) {
    return null
  }

  return (
    <>
      <Container>
        <p>ID: {user.sub}</p>
        <p>Email: {user.email}</p>
        <p>Name: {user.name}</p>
      </Container>
      <UserBooksTable />
    </>
  );
};
