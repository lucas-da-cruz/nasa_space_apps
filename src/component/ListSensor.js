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
        
        this.props.history.push('/notificado');
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
            <div>
            <br />
                <center><h3>Monitoramento via sensor</h3></center>
            <br />
                
                    <Table responsive="sm" variant="dark">
                        <thead>
                            <tr>                                
                                <th>Localizacao</th>
                                <th>Data</th>
                                <th>Status</th>
                                <th>Notificado</th>
                                <th>Enviar alerta</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.sensor.map(
                                    sensors =>
                                        <tr key={sensors.id}>
                                            <td>{sensors.localizacao}</td>
                                            <td>{sensors.data}</td>
                                            <td>{sensors.temperatura}</td>
                                            <td>{sensors.notificado}</td>
                                            <td>
                                                <button className="btn btn-success" onClick={() => this.notificacao(sensors)}>Notificar</button>
                                            </td>
                                            
                                        </tr>
                                )
                            }
                        </tbody>
                    </Table>
            </div>
        )
    }
}

export default ListSensorComponent