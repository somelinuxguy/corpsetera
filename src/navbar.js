import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

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

let connectedNavBar = connect( (state) => ({categories : state.categories}) )(NavBar)

export default connectedNavBar;