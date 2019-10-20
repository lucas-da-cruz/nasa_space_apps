import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
//import DenunciaService from '../service/DenunciaService';
import { InputGroup, FormControl} from 'react-bootstrap';

class InsertDenuncia extends Component {

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

        let denuncia = {
            descricao : values.nome
        }

        //DenunciaService.createDenuncia(denuncia);
        
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
                <center><h3>Criar denúncia</h3></center>
            <br />
                <div className="container">
                    <Formik 
                    initialValues={{ id, description }}
                    onSubmit={this.onSubmit}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    
                                    <label>Descrição</label>
                                    <InputGroup>
                                    <InputGroup.Prepend>
                                        </InputGroup.Prepend>
                                        <FormControl as="textarea" aria-label="With textarea" />
                                    </InputGroup>
                                    <br />
                                    <button className="btn btn-success" type="submit" onSubmit={this.onSubmit}>Criar denúncia</button>
                                </Form>
                            )
                        }
                    </Formik>
    
                </div>
            </div>
        )
    }
}

export default InsertDenuncia