import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

let HomePage = (props) => {
    return props.products ? 
        <div className="productList" >
            <h1>ALL THE THINGS</h1>
            {props.products.map(product => 
            <div className="product" key={product.id}>
                <p> <Link to={`/products/${product.id}`}>{product.title}</Link> </p>
                <img src={product.imageURL} alt={product.title} height="25" width="25"/>
            </div>
            )}
        </div> 
        :
        <p>Categories Not Found</p>
}


let ConnectedHomePage = connect( (state) => ({products: state.products}) )(HomePage)

export default ConnectedHomePage;