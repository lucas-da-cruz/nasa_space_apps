import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserService from '../service/UserService';

class InsertUser extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        //this.validate = this.validate.bind(this);

    }

    componentDidMount() {

        /*console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        CourseDataService.retrieveCourse(INSTRUCTOR, this.state.id)
            .then(response => this.setState({
                description: response.data.description
            }))*/
    }

    onSubmit(values) {

        let user = {
            nome : values.nome,
            telefone: values.telefone,
            cidade: values.cidade
        }

        UserService.createUser(user);
                //.then(() => this.props.history.push('/user/list'))

        //console.log(values);
    }

    /*validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a Description'
        } else if (values.description.length < 5) {
            errors.description = 'Enter atleast 5 Characters in Description'
        }
    
        return errors
    }*/

    render() {

        let { description, id } = this.state
    
        return (
            <div>
            <br />
                <center><h3>Cadastro usuário</h3></center>
                <br />
                <center><h6>Realize seu Cadastro no <b>Fire Notifier</b> e receba todas
                 as atualizações via sms em caso de perigo de incêndio em sua região.</h6></center>
                <div className="container">
                    <Formik 
                    initialValues={{ id, description }}
                    onSubmit={this.onSubmit}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <center>
                                    <table>
                                    <tr>
                                        <td>
                                    <fieldset className="form-group">
                                        <label>Nome</label>
                                        <Field className="form-control" type="text" name="nome"/>
                                    </fieldset>
                                    </td>
                                    <td>
                                    <fieldset className="form-group">
                                        <label>Telefone</label>
                                        <Field className="form-control" type="text" name="telefone"/>
                                    </fieldset>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>
                                    <fieldset className="form-group">
                                        <label>Cidade</label>
                                        <Field className="form-control" type="text" name="cidade"/>
                                    </fieldset>
                                    </td>
                                    <td>
                                    <select id="estado" name="estado" className="form-control">
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                    <option value="EX">Estrangeiro</option>
                                </select>
                                </td>
                                </tr>
                                </table>
                                </center>
                                <br />
                                    <button className="btn btn-success" type="submit" onSubmit={this.onSubmit}>Cadastrar</button>
                                </Form>
                                
                            )
                        }
                    </Formik>
    
                </div>
            </div>
        )
    }
}

export default InsertUser