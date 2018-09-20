import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

// let's add a count of cart items some day:
// props.cart.length should give me a number.
// we should pass cart to the NavBar connector too!

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

//let ConnectedNavBar = connect( (state) => ({categories : state.categories}) )(NavBar)
//export default ConnectedNavBar;
// or this way, which is shorter:
export default connect( (state) => ({categories : state.categories}) )(NavBar);