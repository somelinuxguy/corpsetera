import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import fetchProducts from './fetchproducts';

let HomePage = (props) => {
    return props.products ? 
        <div className="productList" >
            <h1>ALL THE THINGS</h1>
            {/* {props.products.length === 0
            <p>loading</p> */}
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

export default connect( 
    (state) => 
    ({products: state.products}) )(fetchProducts(HomePage))
