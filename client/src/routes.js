import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Layout from './hoc/Layout';
import PostView from './components/Posts';
import Login from './containers/Admin/login';
import Auth from './hoc/auth';
import User from './components/Admin';
import AddReview from './containers/Admin/add'; 
import UserPosts from './components/Admin/userPosts';
import EditReview from './containers/Admin/edit';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Auth(Home, null)} />
                <Route path="/login" exact component={Auth(Login, false)} />
                <Route path="/user" exact component={Auth(User, true)} />
                <Route path="/user/add" exact component={Auth(AddReview, true)} />
                <Route path="/user/edit-post/:id" exact component={Auth(EditReview, true)} />
                <Route path="/allNews/:id" component={Auth(PostView, null)} />
                <Route path="/user/user-reviews" exact component={Auth(UserPosts, true)} />
            </Switch>
        </Layout>
    );
};

export default Routes;