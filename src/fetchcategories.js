import React from 'react';
import {API_URL} from './env.js';

let fetchCategories = (Component) =>
    class FetchCategories extends React.Component{
        componentDidMount() {
            fetch(API_URL + '/category')
                .then(res => res.json())
                .then (categories => {
                    this.props.dispatch({
                        type: 'LOAD_CATEGORIES',
                        categories: categories
                    });
                });
        }
        render() {
            return <Component {...this.props}/>
        }
    }

export default fetchCategories;