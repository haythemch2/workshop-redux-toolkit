import React from 'react'
import {Navbar, Container} from 'react-bootstrap'

const Head = () => {
    return (
        <div>
        <Navbar>
  <Container>
    <Navbar.Brand href="#home">Todo App</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#">React redux</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    )
}

export default Head
