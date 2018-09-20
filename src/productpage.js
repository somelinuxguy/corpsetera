import React from 'react';
import {connect} from 'react-redux';

let ItemButton = (props) => {
    if (props.cart.includes(props.product.id) ) {
        return (
            <button
            onClick={ () =>
                {
                    props.dispatch({type: 'REMOVE_ITEM', id: props.product.id})
                }
            }>
            REMOVE IT
            </button>
        )
    } else {
        return (
            <button
            onClick={ () =>
                {
                    props.dispatch({type: 'ADD_ITEM', id: props.product.id})
                }
            }>
            BUY IT
            </button>
        )
    }
}
let ConnectedButton = connect((state) => ({cart: state.cartItems}) )(ItemButton);

let ProductPage = (props) => {
    let foundProduct = props.products.find(product => product.id === props.match.params.id)
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

let connectedProductPage = connect((state) => ({products: state.products}) )(ProductPage);

export default connectedProductPage;