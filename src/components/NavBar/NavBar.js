import React, {Component} from 'react';
import {Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';


class Navbare extends Component{

 render(){
    return(
      <div>
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand><Link to={"/"}>Home</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to={"/insert/denuncia"}>Denúnciar</Link></Nav.Link>
          <Nav.Link><Link to={"/denuncia/list"}>Monitor</Link></Nav.Link>
          <Nav.Link><Link to={"/sensor/list"}>Sensores</Link></Nav.Link>
          <Nav.Link><Link to={"/insert/user"}>Cadastrar</Link></Nav.Link>
          <Nav.Link><Link to={"/user/list"}>Usuários</Link></Nav.Link>
        </Nav>
  </Navbar.Collapse>
</Navbar>        
        </div>
    );
  }
}

export default Navbare;