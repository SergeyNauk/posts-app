import React, { Component } from 'react';
import '../App.css';

//redux
import {Provider} from 'react-redux';
import configureStore from '../store';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

//containers
import Main from '../containers/Main';
import PostDetail from '../containers/PostDetail';
//components
import About from '../components/About';
import Contacts from '../components/Contacts';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <Router>
                    <Switch>
                        <Route path='/main' component={Main} />
                        <Route path ='/about' component={About} />
                        <Route path ='/contacts' component={Contacts} />
                        <Route path='/post-detail/:name' component={PostDetail} />
                        <Redirect to='/main' />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;