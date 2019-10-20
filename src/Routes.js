import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import ListCoursesComponent from './component/ListCoursesComponent';

import ListUserComponent from './component/ListUserComponent';
import ListSensor from './component/ListSensor';
import InsertUser from './component/InsertUser';


//import CourseComponent from './component/CourseComponent';
import Header from './components/Header';
import Home from './components/Home';
import NavBare from './components/NavBar/NavBar';


class Routes extends Component {
    render() {
        return (
            <Router>
                <>
                    <Header/>
                    <NavBare/>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/user/list" exact component={ListUserComponent} />
                        <Route path="/sensor/list" exact component={ListSensor} />
                        <Route path="/insert/user" exact component={InsertUser} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default Routes;