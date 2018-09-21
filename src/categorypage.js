import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import fetchCategories from './fetchcategories.js'

let CategoryPage = (props) => {
    return props.category ? 
        <div className="productList" >
            <h1>{props.category.title}</h1>
            { props.products.map(product => 
            <div className="product" key={product.id}>
                <p> <Link to={`/products/${product.id}`}>{product.title}</Link> </p>
                <img src={product.imageURL} alt={product.title} height="25" width="25"/>
            </div>
            )}
        </div> 
        :
        <p>Categories Not Found</p>
}

let connectedCategoryPage = connect((state, props) => {
    let foundCategory = state.categories.find(category => category.id === props.match.params.id);
    let justTheseProducts = state.products.filter(product => product.categoryId === foundCategory.id )
    return {category: foundCategory, products: justTheseProducts}
    })(CategoryPage);

export default connectedCategoryPage;