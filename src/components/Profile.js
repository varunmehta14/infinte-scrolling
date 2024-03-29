import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display:"center"
  },
  media: {
    height: 140,
  }
});

const Profile=({username,name,email})=> {
  const classes = useStyles();
  const img="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"

  return (
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={img}
        title={username}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         {email}
        </Typography>
      </CardContent>
    </CardActionArea>
    
  </Card>
  );
}
export default Profile;