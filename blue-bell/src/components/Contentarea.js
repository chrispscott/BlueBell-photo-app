import React, { Component } from 'react';
import HLA1 from '../assets/selfie2.jpg';
import HLA2 from '../assets/muriel1.jpg';
import HLA3 from '../assets/muriel2.jpg';
import HLA4 from '../assets/muriel3.jpg';
import HLA5 from '../assets/selfie3.jpg';
import HLA6 from '../assets/eustace1.jpg';

class Contentarea extends Component {
    render() {
        return (
            <div>
                <h1>This is the content area</h1>
                <img className='pic1' src={HLA1}></img>
                <img className='pic2' src={HLA2}></img>
                <img className='pic3' src={HLA3}></img>
                <img className='pic4' src={HLA4}></img>
                <img className='pic5' src={HLA5}></img>
                <img className='pic6' src={HLA6}></img>
            </div>
        );
    }
}

export default Contentarea;