import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>This is my homepage.</h1>
                <Link to="/collection" >View My Teslas</Link>
            </div>
        );
    }
}

export default Home;