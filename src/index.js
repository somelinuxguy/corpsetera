import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Router from './router.js';

let initialState =
{
    categories: [],
    products: [],
    cartItems: []
}

let reducer = (oldState, action) => {
    if(action.type === 'ADD_ITEM') {
        console.log(`Buy item ${action.id}`);
        return {
            ...oldState,
// Hi. I'm the spread operator... I take an array, and copy it plus a new item. Just like you see here.
            cartItems: [...oldState.cartItems,action.id]
        }

    } else if (action.type === 'REMOVE_ITEM') {
        console.log(`Remove item ${action.id}`);
        let filteredCart = oldState.cartItems.filter(product => product !== action.id);
        return {
            ...oldState,
            cartItems: filteredCart
        }
    } else if (action.type === 'LOAD_PRODUCTS') {
        return {
            ...oldState,
            products: action.products
        }
    } else if (action.type === 'LOAD_CATEGORIES') {
        return {
            ...oldState,
            categories: action.categories
        }
    } else {
        return oldState;
    }
}

let store = createStore(
    reducer, 
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let app = 
    <Provider store={store}>
        <Router />
    </Provider>

ReactDOM.render(app, document.getElementById('root'));