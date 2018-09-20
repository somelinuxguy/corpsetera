import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

let ProductPage = (props) => {
    let foundProduct = props.products.find(product => product.id === props.match.params.id)
    return foundProduct ? 
        <div>
            <p>{foundProduct.title}</p>
            <p>{foundProduct.description}</p>
            <p>Only: ${foundProduct.price}</p>
            <img src={foundProduct.imageURL} height="150" width="150" />
        </div>
        :
        <div>
            <p>Doh! Something broke!</p>
        </div>
}

let connectedProductPage = connect((state) => ({products: state.products}) )(ProductPage);

export default connectedProductPage;