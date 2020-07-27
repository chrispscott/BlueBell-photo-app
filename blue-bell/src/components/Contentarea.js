import React, { Component } from 'react';
import HLA1 from '../assets/selfie2.jpg';
import HLA2 from '../assets/muriel1.jpg';
import HLA3 from '../assets/muriel2.jpg';
import HLA4 from '../assets/muriel3.jpg';
import HLA5 from '../assets/selfie3.jpg';
import HLA6 from '../assets/eustace1.jpg';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import Card6 from './Card6';



class Contentarea extends Component {
    render() {
        return (
            <div className='postbox'>
                <Grid className='container' container spacing={3}>
                    <Grid item xs={4}>
                      <Card1/>
                    </Grid>
                    <Grid item xs={4}>
                        <Card2/>
                    </Grid>
                    <Grid item xs={4}>
                        <Card3/>
                    </Grid>
                    <Grid item xs={4}>
                        <Card4/>
                    </Grid>
                    <Grid item xs={4}>
                        <Card5/>
                    </Grid>
                    <Grid item xs={4}>
                        <Card6/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Contentarea;