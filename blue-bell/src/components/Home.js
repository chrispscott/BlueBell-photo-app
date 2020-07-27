import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Userinfo from './Userinfo';
import Contentarea from './Contentarea';
import Navarea from './Navarea';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Userinfo/>
                <Contentarea/>
                <Navarea/>
                
            </div>
        );
    }
}

export default Home;