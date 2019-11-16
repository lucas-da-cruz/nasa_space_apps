import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Erro from './component/Erro';
import Glicemia from './component/glicemia';
import Imc from './component/imc';
import Colesterol from './component/colesterol';
import Pressao from './component/pressao';

//import CourseComponent from './component/CourseComponent';
import Header from './components/Header';
import Home from './components/Home';
import NavBare from './components/NavBar/NavBar';


class Routes extends Component {
    render() {
        return (
            <Router>
                    <Header/>
                    <NavBare/>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/glicemia" exact component={Glicemia} />
                        <Route path="/imc" exact component={Imc} />
                        <Route path="/colesterol" exact component={Colesterol} />
                        <Route path="/pressao" exact component={Pressao} />

                        <Route path="*" component={Erro}/>
                    </Switch>
            </Router>
        )
    }
}

export default Routes;