import React, {Component} from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import {Link} from 'react-router-dom';


class Navbare extends Component{

 render(){
    return(
      <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Menu</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link><Link to={"/"}>Home</Link></Nav.Link>
              <Nav.Link><Link to={"/insert/user"}>Cadastro</Link></Nav.Link>
              <Nav.Link><Link to={"/user/list"}>Listagem usuários</Link></Nav.Link>
              <Nav.Link><Link to={"/sensor/list"}>Listagem de incidentes</Link></Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" />
              <Button variant="outline-info">Pesquisar</Button>
            </Form>
          </Navbar>                   
        </div>
    );
  }
} 

export default Navbare;