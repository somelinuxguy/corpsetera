import React from 'react';
import {connect} from 'react-redux';
import ConnectedButton from './itembutton.js';

let ProductPage = (props) => {
    let foundProduct = props.products.find(product => product.id === props.match.params.id);
    return foundProduct ? 
        <div className="singleProduct">
            <p>{foundProduct.title}</p>
            <p>{foundProduct.description}</p>
            <p>Only: ${foundProduct.price}</p>
            <img src={foundProduct.imageURL} height="150" width="150" />
            <ConnectedButton product={foundProduct}/>
        </div>
        :
        <div>
            <p>Doh! Something broke!</p>
        </div>
}

let ConnectedProductPage = connect((state) => ({products: state.products}) )(ProductPage);

export default ConnectedProductPage;