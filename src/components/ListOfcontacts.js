import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ContactDetails from './ContactDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '40ch',
    backgroundColor: theme.palette.background.paper,
    margin: 'auto',
  },
  inline: {
    display: 'inline',
  },
}));

function ListOfuser(props) {
  const classes = useStyles();

  const contactDetails = (user) => {
    props.history.push({
      pathname: '/contactDetails',
      state: { user: user },
    });
  };

  const users = props.users.map((user) => {
    return (
      <List className={classes.root}>
        <ListItem
          alignItems="flex-start"
          button
          onClick={() => {
            contactDetails(user);
          }}
        >
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={user.picture.thumbnail} />
          </ListItemAvatar>
          <ListItemText
            primary={user.name.first + ' ' + user.name.last}
            secondary={<Fragment>{user.email}</Fragment>}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    );
  });
  return <ul>{users}</ul>;
}
export default withRouter(ListOfuser);
