import React, { Component } from 'react';
import SensorService from '../service/SensorService';
import { Route } from 'react-router-dom'
import { Table } from 'react-bootstrap';


//Componente criado para listar os cursos em uma tabela
class ListSensorComponent extends Component {

    constructor(props) {
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
    }

    refreshSensor() {
        SensorService.retrieveAllSensor()
            .then(
                response => {
                    //console.log(response);
                    this.setState({ sensor: response.data })
                }
            )
    }

    notificacao(sensors) {
        //console.log('notificado ' + id)
        SensorService.notificar(sensors);

        //this.props.history.push(`/courses/${id}`)
    }

    deleteRegistro(sensors) {
        SensorService.deleteRegistro(sensors);
    }

    /*
    updateCourseClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/courses/${id}`)
    }

    addCourseClicked() {
        this.props.history.push(`/courses/-1`)
    }*/
/*id    localizacao data    temperatura notificado*/
    render() {
        return (
            <div className="container">
                <h3>Dados do sensor</h3>
                <div className="container">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Localizacao</th>
                                <th>Data</th>
                                <th>Temperatura</th>
                                <th>Notificado</th>
                                <th>Notificações</th>
                                <th>Deletar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.sensor.map(
                                    sensors =>
                                        <tr key={sensors.id}>
                                            <td>{sensors.id}</td>
                                            <td>{sensors.localizacao}</td>
                                            <td>{sensors.data}</td>
                                            <td>{sensors.temperatura}</td>
                                            <td>{sensors.notificado}</td>
                                            <td>
                                                <a href="/sensor/list"><button className="btn btn-success" onClick={() => this.notificacao(sensors)}>Notificar</button></a>
                                            </td>
                                            <td>
                                                <a href="/sensor/list"><button className="btn btn-warning" onClick={() => this.deleteRegistro(sensors)}>Apagar</button></a>
                                            </td>

                                        </tr>
                                )
                            }
                        </tbody>
                    </Table>
                    
                </div>
            </div>
        )
    }
}

export default ListSensorComponent