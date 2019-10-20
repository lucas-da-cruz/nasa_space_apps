import React, { Component } from 'react';
import SensorService from '../service/SensorService';
import { Route } from 'react-router-dom'
import { Table } from 'react-bootstrap';


//Componente criado para listar os cursos em uma tabela
class DenunciaSucesso extends Component {

     render() {
        return (
            <div>
            <br />
            <center><h1>Denúncia feita com sucesso</h1></center>
            <center><h4>Buscamos sua localização atual e registramos sua denúncia, 
            as entidades e pessoas cadastradas em nosso sistema e que estão próximo ao incêndio, serão notificadas via SMS.</h4></center>
            </div>
        )
    }
}

export default DenunciaSucesso