import React, { useState, useEffect } from 'react';
import useForm from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImcService from '../../service/imc/ImcService';

import Alert from 'react-bootstrap/Alert';

export default function Imc() {

  const { register, handleSubmit, watch, errors } = useForm();
  
  const [ showStatus, setShowStatus ] = useState();

  const [ showAlert, setshowAlert ] = useState(false);

  const onSubmit = data => {
  let valor =  ImcService.calculaImc(data);

  setshowAlert(true);
  setShowStatus(valor);

  };

  return (
    <div className="container">
      <center><h1>IMC</h1></center>
      <p align="justify">Uma das maneiras de saber se o seu peso está adequado à sua altura é calculando o <b>Índice de Massa Corporal (IMC)</b>.
       O resultado dessa fórmula matemática poderá indicar, por exemplo, se você está com peso adequado,
       se apresenta magreza, sobrepeso ou obesidade. Considere apenas como um ponto de partida,
       pois o IMC não avalia o seu estado nutricional como todo e precisa ser interpretado por um 
       profissional de saúde, que analisará uma série de outras medidas e características suas, como idade,
       sexo, percentual de gordura, entre outros aspectos, antes de um diagnóstico.
      A fórmula do IMC é a mesma para todas as pessoas. O que muda são os pontos de corte, ou seja, os valores
considerados como referências para a classificação do seu peso. Essas referências são específicas para
crianças, adolescentes, adultos, idosos e gestantes.</p>
        <Row className="justify-content-md-center">
        <Col xs lg="4">
          <form onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Peso</Form.Label>
                <Form.Control name="peso" type="text" ref={register({min: 1, max: 3})} placeholder="Insira seu peso em kg" />
                
                <Form.Label>Altura</Form.Label>
                <Form.Control name="altura" type="number" ref={register({maxlength: 2})} placeholder="Insira sua altura em cm" />
            </Form.Group>

              <Row className="justify-content-md-center">
                <Button className="justify-content-md-center" type="submit" variant="primary">Consultar</Button>
              </Row>

          </form>
      </Col>
      </Row>
      {showAlert?
      <div>
        <br /><br />
        <Alert variant="secondary">{showStatus}</Alert>
      </div> 
      : null}
    </div>
  );
}