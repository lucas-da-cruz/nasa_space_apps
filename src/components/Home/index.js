import React, {Component} from 'react';
import './home.css'
//import img_01 from '../img/img_01.jpeg'; // with import
import img from './img_01.jpeg'; // with import





class Home extends Component{
 
  render(){
        return(
            <div>
                <h1>Fire Notifier</h1>
                <div className="lista-filmes">
                  <article className="filme">
                    <h3>Nossa causa</h3>
                    <p>O <b>Fire Notifier</b> é um sistema no qual possui como principal objetivo atuar no 
                    monitoramento de foco incêndio em conjunto com a sociedade, auxiliando assim
                    no controles de queimadas florestais, sendo por meio de sensores automatizados ou
                    por denúncia dos nossos usuários.</p>
                    <p>O Fire Notifier visa agir em conjunto com entidades departamentais em pró da causa contra a queimada ilegal,
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
