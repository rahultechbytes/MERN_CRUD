import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Users from '../components/users';
import NewPlace from '../components/places/newPlace';
import MainNavigation from '../components/shared/Navigation/MainNavigation';
import UserPlaces from '../components/places/UserPlaces';

const Router = () => {
    return(
        <>
            <MainNavigation/>
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Users/>
                    </Route>
                    <Route path="/:userId/places" exact>
                        <UserPlaces/>
                    </Route>
                    <Route path="/places/new" exact>
                        <NewPlace/>
                    </Route>
                    <Redirect to="/"/>
                </Switch>
            </main>
        </>
    )
}

export default Router;