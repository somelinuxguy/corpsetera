import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import HomePage from './homepage.js';
import CategoryPage from './categorypage.js';
import ProductPage from './productpage.js';

let Navbar = () =>
    <div>
        <a href="/">All Things</a> 
        <br/>
        <a href="#hats">Hats</a>
        <br/>
        <a href="#pants">Pants</a>
        <br/>
        <a href="#tops">Tops</a>
    </div>

let Router = (props) => 
    <HashRouter>
        <div>
            <Navbar/>
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