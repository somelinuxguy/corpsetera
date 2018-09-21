import React from 'react';
import {API_URL} from './env.js';

let fetchProducts = (Component) =>
    class FetchProducts extends React.Component{
        componentDidMount() {
            fetch(API_URL + '/product')
                .then(res => res.json())
                .then (products => {
                    console.log(products);
                    this.props.dispatch({
                        type: 'LOAD_PRODUCTS',
                        products: products
                    });
                });
        }
        render() {
            return <Component {...this.props}/>
        }
    }

export default fetchProducts;