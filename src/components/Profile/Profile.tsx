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
    <div className="background">
      
      <Container className="text-center py-3 border background-white">
        <h1 className="text-center">Profile</h1>        
        <p>ID: {user.sub}</p>
        <p>Email: {user.email}</p>
        <p>Name: {user.name}</p>
      </Container>
      <UserBooksTable />
    </div>
  );
};
