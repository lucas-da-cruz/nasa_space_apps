import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import ListCoursesComponent from './component/ListCoursesComponent';

import ListUserComponent from './component/ListUserComponent';
import ListSensor from './component/ListSensor';
import InsertUser from './component/InsertUser';
import InsertDenuncia from './component/InsertDenuncia';
import ListMonitor from './component/ListMonitor';
import Notificado from './component/Notificado';
import Erro from './component/Erro';




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
                        <Route path="/user/list" exact component={ListUserComponent} />
                        <Route path="/sensor/list" exact component={ListSensor} />
                        <Route path="/insert/user" exact component={InsertUser} />
                        <Route path="/insert/denuncia" exact component={InsertDenuncia} />
                        <Route path="/denuncia/monitor" exact component={ListMonitor} />
                        <Route path="/notificado" exact component={Notificado} />
                        <Route path="*" component={Erro}/>
                    </Switch>
            </Router>
        )
    }
}

export default Routes;