import React, {Component} from 'react';
import './home.css'
//import img_01 from '../img/img_01.jpeg'; // with import
import img from './img_01.jpeg'; // with import

class Home extends Component{
 
  render(){
        return(
            <div>
                <center><h1>Fire Notifier</h1></center>
                <div className="lista-filmes">
                <article className="filme">
                    <h3>Quem somos</h3>
                    <p align="justify">Somos um grupo de jovens apaixonado por ciência e tecnologia, no qual fomos desafiados, 
                    pela edição do hackathon <b>Nasa Space Apps - 2019, </b>
                    por uma causa extremamente nobre, fazer uso dessa paixão para ajudar a proteger o ecossistema natural das florestas
                    contra focos de incêndios e assim respectivamente cuidar da 
                    sociedade em que nela habita. Te convidamos a conhecer um pouco mais do nosso projeto e a se juntar
                    com a gente nessa luta a favor da preservação da nossa linda mãe natureza!</p>
                    <img src={img} />
                  </article>
                  <article className="filme">
                    <h3>Nossa causa</h3>
                    <p align="justify">O <b>Fire Notifier</b> é um sistema no qual possui como principal objetivo atuar no 
                    monitoramento de foco incêndio em conjunto com a sociedade, auxiliando assim
                    no controles de queimadas florestais, sendo por meio de sensores automatizados ou
                    por denúncia dos nossos usuários.</p>
                    <p align="justify">O Fire Notifier visa agir em conjunto com entidades departamentais em pró da causa contra a queimada ilegal,
                    Orgãos como: Defesa civil, brigadistas do Corpo de bombeiros, Polícia florestal, 
                    orgãos da reserva ambiental e o público voluntário.</p>
                    <img src={img} />
                  </article>
                </div>

            </div>
        );
    }
}

export default Home;
