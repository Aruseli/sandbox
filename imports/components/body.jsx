import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    minHeight: '100%',
    overflow: 'hidden'
  }
}));

export const Body = ({ children }) => {
  const classes = useStyle({});

  return <div className={classes.root}>{children}</div>;
};
