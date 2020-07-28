import React, { Component } from 'react';
import selfie1 from '../assets/selfie1.jpg';
import selfie2 from '../assets/selfie2.jpg';
import selfie3 from '../assets/selfie3.jpg';
import HLA2 from '../assets/muriel1.jpg';
import HLA3 from '../assets/muriel2.jpg';
import HLA4 from '../assets/muriel3.jpg';
import HLA6 from '../assets/eustace1.jpg';
import HLA7 from '../assets/pro1.png';
import HLA8 from '../assets/edd1.jpg';
import HLA9 from '../assets/knd1.png';
import HLA10 from '../assets/PLANK1.jpg';
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";



class Friendlist extends Component {

    
    
    render() {
        return (
            <div>
                
                <Card variant="outlined">
                <CardHeader
                    
                    title="Courage"
                    subheader="Friends list"
                    />
                </Card>
                <Card variant="outlined">
            <CardHeader
                avatar={
                <Avatar aria-label="recipe">
                    <img className='lilpic1' src={HLA7}></img>
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title="Professor"
                subheader='DOING SCIENCE STUFF'
            />

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                
                </Typography>
            </CardContent>
            </Card>

            
                    <Card variant="outlined">
                        <CardHeader
                            avatar={
                            <Avatar aria-label="recipe">
                                <img className='lilpic2' src={HLA8}></img>
                            </Avatar>
                            }
                            action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                            title="edd ed n eddy"
                            subheader="Hunting for Jawbreakers"
                        />

                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            
                            </Typography>
                        </CardContent>
                    </Card>


                    <Card variant="outlined">
                        <CardHeader
                            avatar={
                            <Avatar aria-label="recipe">
                                <img className='lilpic3' src={HLA9}></img>
                            </Avatar>
                            }
                            action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                            title="Codename kids next door"
                            subheader=""
                        />

                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            
                            </Typography>
                        </CardContent>
                    </Card>


                    <Card variant="outlined">
                        <CardHeader
                            avatar={
                            <Avatar aria-label="recipe">
                                <img className='lilpic4' src={HLA10}></img>
                            </Avatar>
                            }
                            action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                            title="PLANK"
                            subheader=" DOING STUFF"
                        />

                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            
                            </Typography>
                        </CardContent>
                    </Card>



            </div>
        );
    }
}

export default Friendlist;