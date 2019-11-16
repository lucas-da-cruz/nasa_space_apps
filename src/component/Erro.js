import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Table } from 'react-bootstrap';

class Erro extends Component {   
    render() {
        return (
            <div>
            <br />
            <center><h1>Ops, não encontramos a página solicitada! :(</h1></center>
            <center><h4>Verifique o endereço e tente novamente.</h4></center>
            </div>
        )
    }
}

export default Erro;