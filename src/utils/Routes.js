import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Users from '../components/users';
import NewPlace from '../components/newPlace';

const Router = () => {
    return(
        <Switch>
            <Route path="/" exact>
                <Users/>
            </Route>
            <Route path="/places/new" exact>
                <NewPlace/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}

export default Router;