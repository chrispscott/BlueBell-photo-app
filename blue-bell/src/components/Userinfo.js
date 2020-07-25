import React, { Component } from 'react';
import SELFIE from '../assets/selfie1.jpg'

class Userinfo extends Component {
    render() {
        return (
            <div className='container2'>
                <img src={SELFIE}></img>
                <h3>posts</h3>
                <h3>friends</h3>
                <section>Blah Blah Blah </section>
            </div>
        );
    }
}

export default Userinfo;