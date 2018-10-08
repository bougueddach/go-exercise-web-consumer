/**
 * Created by macbook on 10/7/18.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/Home';
import User from './components/User';

export default (
    <Route path={"/"}>
        <IndexRoute component={Home} />
        <Route path={"user/:id"} component={User} />
    </Route>
);