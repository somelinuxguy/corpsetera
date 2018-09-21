import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import fetchCategories from './fetchcategories'

let NavBar = (props) =>
    <div>
        <a href="/">All Things</a> 
        <br/>
        { props.categories.map(category => 
            <p key={category.id}>
                <Link to={`/categories/${category.id}`}>{category.title}</Link>
            </p>
        )}
    </div>


// export default connect( (state) => ({categories : state.categories}) )(NavBar);
export default connect( (state) => ({categories : state.categories}) )(fetchCategories(NavBar));