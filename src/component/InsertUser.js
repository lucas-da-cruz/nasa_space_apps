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
                <h3>Cadastro usuário</h3>
                <div className="container">
                    <Formik 
                    initialValues={{ id, description }}
                    onSubmit={this.onSubmit}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Nome</label>
                                        <Field className="form-control" type="text" name="nome"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Telefone</label>
                                        <Field className="form-control" type="text" name="telefone"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Cidade</label>
                                        <Field className="form-control" type="text" name="cidade"/>
                                    </fieldset>
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