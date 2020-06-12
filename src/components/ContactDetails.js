import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: '8em',
  },
  pos: {
    marginBottom: 12,
    marginLeft: '1em',
  },
  pos2: {
    marginLeft: '1em',
  },
  pos3: {
    marginLeft: '5em',
  },
}));
function ContactDetails(props) {
  const user = props.history.location.state.user;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            alt="Not existed"
            src={user.picture.thumbnail}
          ></Avatar>
        }
        title={user.name.title + ' ' + user.name.first + ' ' + user.name.last}
      />
      <Typography className={classes.pos} display="inline" color="textSecondary">
        mobile:
      </Typography>
      <Typography className={classes.pos2} display="inline" variant="h6" component="h6">
        {user.cell}
      </Typography>
      <br />
      <Typography className={classes.pos} display="inline" color="textSecondary">
        phone:
      </Typography>
      <Typography className={classes.pos2} display="inline" variant="h6" component="h6">
        {user.phone}
      </Typography>
      <br />
      <Typography className={classes.pos} display="inline" color="textSecondary">
        email:
      </Typography>
      <Typography className={classes.pos2} display="inline" variant="h6" component="h6">
        {user.email}
      </Typography>
      <br />
      <Typography className={classes.pos} display="inline" color="textSecondary">
        address:
      </Typography>
      <Typography className={classes.pos2} display="inline" variant="h6" component="h6">
        {user.location.street.name + ' ' + user.location.street.number}
      </Typography>
      <br />
      <Typography className={classes.pos3} display="inline" variant="h6" component="h6">
        {user.location.postcode + ' ' + user.location.state}
      </Typography>
      <br />
      <Typography className={classes.pos3} display="inline" variant="h6" component="h6">
        {user.location.country}
      </Typography>
    </Card>
  );
}

export default withRouter(ContactDetails);
