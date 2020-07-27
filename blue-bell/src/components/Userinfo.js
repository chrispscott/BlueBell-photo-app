import React, { Component } from 'react';
import SELFIE from '../assets/selfie1.jpg'

class Userinfo extends Component {
    render() {
        return (
            <div className='container2'>
                <section className='profile-image'>
                    <h3> Courage</h3>
                    <img className='profile' src={SELFIE}></img>
                </section>
                <section className='profile-info'>
                <h3 className='num-posts'>posts</h3>
                <h3 className='num-friends'>friends</h3>
                <section className='about'>Blah Blah Blah </section>
                </section>
            </div>
        );
    }
}

export default Userinfo;