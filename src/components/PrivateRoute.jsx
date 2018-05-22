import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ user, component: Component, ...rest }) {
        return (
            <Route {...rest} render={
                props => 
                    user ?
                        <Component {...props} />
                        :
                        <Redirect to="/login" />
                
            } />
        );
}

export default PrivateRoute;