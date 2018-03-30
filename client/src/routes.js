import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Layout from './hoc/Layout';
import PostView from './components/Posts';
 
const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/allNews/:id" component={PostView} />
            </Switch>
        </Layout>
    );
};

export default Routes;