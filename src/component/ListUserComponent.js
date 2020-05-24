import React, { Component } from 'react';
import UserService from '../service/UserService';
import { Table } from 'react-bootstrap';


//Componente criado para listar os cursos em uma tabela
class ListUserComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: [],
            message: null
        }

        //this.retrieveAllUser = this.retrieveAllUser.bind(this);
        this.refreshUser = this.refreshUser.bind(this);
        
    }

    componentDidMount() {
        this.refreshUser();
    }

    refreshUser() {
        UserService.retrieveAllUser()
            .then(
                response => {
                    //console.log(response);
                    this.setState({ user: response.data })
                }
            )
    }

    /*deleteCourseClicked(id) {
        CourseDataService.deleteCourse(INSTRUCTOR, id)
            .then(
                response => {
                    this.setState({ message: `Delete of course ${id} Successful` })
                    this.refreshCourses()
                }
            )
    }

    updateCourseClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/courses/${id}`)
    }

    addCourseClicked() {
        this.props.history.push(`/courses/-1`)
    }*/
/*telefone  nome    cidade  geolocalizacao*/
    render() {
        return (
            <div>
            <br />
                <center><h3>Usuário cadastrados</h3></center>
            <br />
                <div>
                    <Table responsive="sm" variant="dark">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Telefone</th>
                                <th>Cidade</th>
                                <th>Geolocalização</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.user.map(
                                    users =>
                                        <tr key={users.telefone}>
                                            <td>{users.nome}</td>
                                            <td>{users.telefone}</td>
                                            <td>{users.cidade}</td>
                                            <td>{users.geolocalizacao}</td>
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

export default ListUserComponent