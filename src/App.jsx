import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Toolbar from './components/Toolbar';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import News from './pages/News';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Logout from './pages/Logout';

class App extends Component {
    state = {
        user: null
    }

    login = user => {
        this.setState({ user }, () => this.props.history.push('/profile'));
    }

    logout = user => {
        this.setState({ user: null }, () => this.props.history.push('/'));
    }

    render() {
        return (
            <div className="app">
                <Toolbar user={this.state.user} />
                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/news" component={News} />
                <Route path="/login" render={props => <Login onLogin={this.login} />} />
                <Route path="/logout" render={props => <Logout onLogout={this.logout} />} />
                <PrivateRoute path="/profile" component={Profile} user={this.state.user} />
                
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);