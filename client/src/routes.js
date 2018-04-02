import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Layout from './hoc/Layout';
import PostView from './components/Posts';
import Login from './containers/Admin/login';
import Auth from './hoc/auth';
import User from './components/Admin';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Auth(Home, null)} />
                <Route path="/login" exact component={Auth(Login, false)} />
                <Route path="/user" exact component={Auth(User, true)} />
                <Route path="/allNews/:id" component={Auth(PostView)} />
            </Switch>
        </Layout>
    );
};

export default Routes;