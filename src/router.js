import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import NavBar from './navbar.js';
import HomePage from './homepage.js';
import CategoryPage from './categorypage.js';
import ProductPage from './productpage.js';


let Router = (props) => 
    <HashRouter>
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/" render={(routeProps) => 
                    <HomePage {...routeProps} {...props} /> }
                />
                <Route exact path="/categories/:id" render={(routeProps) =>
                    <CategoryPage {...routeProps} {...props} /> }
                />
                <Route exact path="/products/:id" render={(routeProps) =>
                    <ProductPage {...routeProps} {...props} /> }
                />
            </Switch>
        </div>
    </HashRouter>

export default Router;