import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

let ItemButton = (props) => {
    if (props.cartItems.includes(props.match.params.id) ) {
        return (
            <button
            onClick={ () =>
                {
                    props.dispatch({type: 'REMOVE_ITEM', id: props.match.params.id})
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
                    props.dispatch({type: 'ADD_ITEM', id: props.match.params.id})
                }
            }>
            BUY IT
            </button>
        )
    }
}

let ProductPage = (props) => {
    let foundProduct = props.products.find(product => product.id === props.match.params.id)
    return foundProduct ? 
        <div className="singleProduct">
            <p>{foundProduct.title}</p>
            <p>{foundProduct.description}</p>
            <p>Only: ${foundProduct.price}</p>
            <img src={foundProduct.imageURL} height="150" width="150" />
            {ItemButton(props)}
            {/* <button
                onClick={ () =>
                    {
                        props.dispatch({type: 'ADD_ITEM', id: foundProduct.id})
                    }
                }>
                BUY IT
            </button> */}
        </div>
        :
        <div>
            <p>Doh! Something broke!</p>
        </div>
}

let connectedProductPage = connect((state) => ({products: state.products, cartItems: state.cartItems}) )(ProductPage);

export default connectedProductPage;