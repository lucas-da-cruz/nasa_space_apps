import React, { Component } from 'react';
import SensorService from '../service/SensorService';
import { Route } from 'react-router-dom'
import { Table } from 'react-bootstrap';


//Componente criado para listar os cursos em uma tabela
class ListMonitor extends Component {

    /*constructor(props) {
        super(props);
        this.state = {
            sensor: [],
            message: null
        }

        //this.retrieveAllUser = this.retrieveAllUser.bind(this);
        this.refreshSensor = this.refreshSensor.bind(this);
    }

    componentDidMount() {
        this.refreshSensor();
    }*/

   

    /*
    updateCourseClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/courses/${id}`)
    }

    addCourseClicked() {
        this.props.history.push(`/courses/-1`)
    }*/

    notificacao() {       
        this.props.history.push('/notificado');
    }

    render() {
        return (
            <div>
            <br />
            <div>
                <center><h3>Incêndios via denúncia</h3></center>
            <br />
                
                    <Table responsive="sm" variant="dark">
                        <thead>
                            <tr>                                
                                <th>Descrição</th>
                                <th>Data</th>
                                <th>Notificado</th>
                                <th>Local</th>
                                <th>Notificações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={1}>
                                    <td>Foco de incêndio visto de longe na mata</td>
                                    <td>19/10/2019</td>
                                    <td>True</td>
                                    <td>-43.9396, 111.2580</td>
                                    <td>
                                        <button className="btn btn-success">Notificar</button>
                                    </td>
                            </tr>
                            <tr key={2}>
                                    <td>Incêndio na rodovia Santos Dumont</td>
                                    <td>18/10/2019</td>
                                    <td>True</td>
                                    <td>30.9919, -162.3940</td>
                                    <td>
                                        <button className="btn btn-success" onClick={() => this.notificacao()}>Notificar</button>
                                    </td>
                            </tr>
                        </tbody>
                    </Table>
                    
                </div>
            </div>
        )
    }
}

export default ListMonitor