import React, {Component} from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import {Link} from 'react-router-dom';


class Navbare extends Component{

 render(){
    return(
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

        
        <Nav.Link className="navbar-brand"><Link to={"/"}>Home</Link></Nav.Link>

        <button className="navbar-toggler" data-toggle="collapse" 
        data-target="#navegacao">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navegacao">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Nav.Link><Link to={"/create/denuncia"}>Denúncia</Link></Nav.Link>
                </li>
                <li className="nav-item">
                    <Nav.Link><Link to={"/insert/user"}>Cadastro</Link></Nav.Link>
                </li>
                <li className="nav-item">
                    <Nav.Link><Link to={"/user/list"}>Listagem usuários</Link></Nav.Link>
                </li>
                <li className="nav-item">
                    <Nav.Link><Link to={"/sensor/list"}>Listagem de incidentes</Link></Nav.Link>
                </li>
            </ul>
        </div>
    </nav>            
        </div>
    );
  }
} 

export default Navbare;