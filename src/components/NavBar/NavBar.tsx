import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { useAuth0 } from "@auth0/auth0-react";


export const NavBar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
  

  const onLogin = () => loginWithRedirect()
  const onLogout = () => logout({ returnTo: window.location.origin })

  return (
    <Navbar bg='dark' variant='dark'>
    <Container>
      <Navbar.Brand href='/'>Libraryz</Navbar.Brand> 
      <Nav className='ms-auto'>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/books'>Books</Nav.Link>

        {!isAuthenticated && (
          <Nav.Link onClick={onLogin}>Login</Nav.Link>
        )}

        {isAuthenticated && (
          <>
            <Nav.Link href='/profile'>Profile</Nav.Link>
            <Nav.Link onClick={onLogout}>Logout</Nav.Link>
          </>
        )}

      </Nav>
    </Container>
  </Navbar>
  )
}
