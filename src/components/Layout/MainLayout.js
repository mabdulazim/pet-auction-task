import React from 'react';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import '../../assets/scss/main.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0 60px',
    // [theme.breakpoints.up("lg")]: {
    //   width: 1170
    // }
  },
}));

function MainLayout(props) {
  const classes = useStyles();

  return (
    <>
      <Header />

      <div className={classes.root}>
        {props.children}
      </div>
    </>
  );
}


export default MainLayout;