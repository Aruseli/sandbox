import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
  root: ({ smSize, mdSize }) => ({
    [theme.breakpoints.down('sm')]: {
      paddingLeft: smSize,
      paddingRight: smSize,
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: mdSize,
      paddingRight: mdSize,
    },
  }),
}));

export const Container = ({ children, smSize, mdSize }) => {
  const classes = useStyle({ smSize, mdSize });

  return <div className={classes.root}>{children}</div>;
};
