import React, { useState } from 'react';
import useForm from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Pressao() {

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => { console.log(data) };

  return (
    <div className="container">
      <center><h1>Pressão arterial</h1></center>
        <Row className="justify-content-md-center">
        <Col xs lg="4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Pressão arterial</Form.Label>
              <Form.Control name="pressao" type="text" ref={register} placeholder="Insira o valor da pressão arterial" />
            </Form.Group>
              <Row className="justify-content-md-center">
                <Button className="justify-content-md-center" type="submit" variant="primary">Salvar</Button>
              </Row>
          </form>
      </Col>
      </Row>
    </div>
  );
}