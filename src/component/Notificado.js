import React, { Component } from 'react';
import SensorService from '../service/SensorService';
import { Route } from 'react-router-dom'
import { Table } from 'react-bootstrap';


//Componente criado para listar os cursos em uma tabela
class Notificado extends Component {

     render() {
        return (
            <div>
            <br />
            <center><h1>Notificado com sucesso</h1></center>
            <center><h4>Um SMS de alerta foi enviado para todos os usuários cadastrado no sistema
            e que moram em uma raio de 15km próximo do foco do incêndio.</h4></center>
            </div>
        )
    }
}

export default Notificado