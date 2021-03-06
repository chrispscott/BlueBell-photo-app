import React from 'react';
import selfie1 from '../assets/selfie1.jpg';
import selfie2 from '../assets/selfie2.jpg';
import selfie3 from '../assets/selfie3.jpg';
import HLA2 from '../assets/muriel1.jpg';
import HLA3 from '../assets/muriel2.jpg';
import HLA4 from '../assets/muriel3.jpg';
import HLA6 from '../assets/eustace1.jpg';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  }
  
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
             <img className='lilpic' src={selfie1}></img>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Courage"
        subheader="JULY 26, 2020"
      />
      <CardMedia
        className={classes.media}
        image={HLA4}
        title="Courage"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Adventure
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}