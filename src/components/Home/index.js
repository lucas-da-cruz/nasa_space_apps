import React, {Component} from 'react';
import './home.css'
import img from './home_01.jpg';
import logon from './home_02.jpg';
import Image from 'react-bootstrap/Image';

class Home extends Component{
 
  render(){
        return(
            <div>
                <center><h1>Health & Wellness</h1></center>
                <div className="lista-filmes">
                <article className="filme">
                    <h3>Quem somos</h3>
                    <p align="justify">Somos um grupo de estudante do curso de Análise e Desenvolvimento de Sistemas
                    do 3° Semestre da Fatec de Indaiatuba-SP, nosso principal objetivo nesse trabalho interdisciplinar
                    é de auxiliar no controle e gerenciamento de pacientes que possuem diabetes, colesterol, hipotensão e hipertensão.
                    </p>
                    <img src={img}/>
                </article>
                <article className="filme">
                    <h3>Nossa causa</h3>
                    <p align="justify">O <b>Health & Wellness</b> é um sistema no qual o paciente poderá inserir suas medições
                    de saúde diária, no qual caso o sistema reconheça, nos dados, uma ameaça de saúde, criaria um alerta diretamente
                    ao médico do paciente, além da centralização dessas informações para consultas de rotina, retorno e acompanhamento. 
                    </p>
                    <img src={logon}/>
                  </article>
                </div>

            </div>
        );
    }
}

export default Home;
