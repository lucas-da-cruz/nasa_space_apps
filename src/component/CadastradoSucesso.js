import React, { Component } from 'react';
import SensorService from '../service/SensorService';
import { Route } from 'react-router-dom'
import { Table } from 'react-bootstrap';


//Componente criado para listar os cursos em uma tabela
class CadastradoSucesso extends Component {

     render() {
        return (
            <div>
            <br />
            <center><h1>Cadastrado com sucesso</h1></center>
            <center><h4>Parabéns, você foi cadastrado com sucesso, agora você será notificado
            de todos incêndios ou ameaça de incêndios em sua região!</h4></center>
            </div>
        )
    }
}

export default CadastradoSucesso