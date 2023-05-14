import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 ,textAlign:"left"}} >
      <CardMedia
        sx={{ height: 140 }}
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="h6">
          {props.location}
        </Typography>
        <Typography gutterBottom variant="h6" component="h6">
          {props.datetime}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {props.Problemstatement}
        </Typography>
      </CardContent>
    </Card>
  );
}