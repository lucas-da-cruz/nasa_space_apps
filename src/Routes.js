import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Erro from './component/Erro';
<<<<<<< HEAD
import Glicemia from './component/glicemia';
import Imc from './component/imc';
import Colesterol from './component/colesterol';
import Pressao from './component/pressao';
=======



>>>>>>> parent of 06214ba... versao 1.0

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
<<<<<<< HEAD
                        <Route path="/glicemia" exact component={Glicemia} />
                        <Route path="/imc" exact component={Imc} />
                        <Route path="/colesterol" exact component={Colesterol} />
                        <Route path="/pressao" exact component={Pressao} />

=======
                        <Route path="/user/list" exact component={ListUserComponent} />
                        <Route path="/sensor/list" exact component={ListSensor} />
                        <Route path="/insert/user" exact component={InsertUser} />
                        <Route path="/insert/denuncia" exact component={InsertDenuncia} />
                        <Route path="/denuncia/monitor" exact component={ListMonitor} />
                        <Route path="/notificado" exact component={Notificado} />
>>>>>>> parent of 06214ba... versao 1.0
                        <Route path="*" component={Erro}/>
                    </Switch>
            </Router>
        )
    }
}

export default Routes;