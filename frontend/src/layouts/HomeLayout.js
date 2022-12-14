import { Navbar, Nav, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import React, { useContext } from 'react';

import AuthContext from '../contexts/AuthContext';

const MainLayout = ({ children }) => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const onSignIn = () => {
    history.replace("/login");
  }

  const onRegister = () => {
    history.replace("/register");
  }

  const onSignOut = () => {
    auth.signOut();
    history.push("/login");
  }

  const goToPlaces = () => {
    history.push("/places");
  }

  return (
    <>
    <video id="background-video" loop autoPlay>
    <source src="cook.mp4" type="video/mp4" />
    Your browser does not support the video tag.
</video>
      <Navbar bg="dark" variant="dark" className="mb-4">
        {/* <Navbar.Brand href="/"></Navbar.Brand> */}
       
          <Navbar.Brand href="/">
            <img
              alt="images"
              src="logo.png"
              width="40"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Home
          </Navbar.Brand>
       
        
        <Nav>
          <Nav.Link onClick={goToPlaces}>Menu</Nav.Link>
        </Nav>
        
        <Nav className="flex-grow-1 justify-content-end">
          {auth.token ? (
            <Nav.Link onClick={onSignOut}>Logout</Nav.Link>
          ) : (
            [
              <Nav.Link key={1} onClick={onSignIn}>Login</Nav.Link>,
              <Nav.Link key={2} onClick={onRegister}>Register</Nav.Link>
            ]
          )}
          
        </Nav>
      </Navbar>

      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="logo.png"
              width="40"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstras
          </Navbar.Brand>
        </Container>
      </Navbar> */}
      <Container>
        
        {children}
      </Container>
    </>
  )
}

export default MainLayout;