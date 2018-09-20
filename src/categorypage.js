import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

let CategoryPage = (props) => {
    
    return props.category ? 
        <div>
            <h1>{props.category.title}</h1> and Related Viscera
            { props.products.map(product => 
            <p key={product.id}>
                <Link to={`/products/${product.id}`}>{product.title}</Link>
            </p>
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