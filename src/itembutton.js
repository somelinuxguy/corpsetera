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

export default ConnectedButton;