import { makeStyles, Typography, Hidden, List, ListItem, ListItemText, Grid, ListItemAvatar } from "@material-ui/core";

import Link from 'next/link';

import React from "react";
import { SSL_OP_NO_TLSv1_1 } from "constants";

const useStyles = makeStyles(theme => ({
}));

const paperPlane = require("../../../images/paperplane.svg");

export const Subscribe = ({ ...props }) => {
  const classes = useStyles({});
  // const theme = useTheme();
  // const xsDown = useMediaQuery(theme.breakpoints.down('xs'));

  return (
  <>
    <div style={{
      position: 'relative',
      width: 250,
      height: 1,
      backgroundColor: '#000',
    }}>
      <div style={{
        position: 'absolute',
        top: -25,
        left: 0
      }}>
        E-mail
      </div>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0
      }}>
        Comment
      </div>
      <div style={{
        position: 'absolute',
        right: -50,
        top: -20,
        textAlign: 'right',
        width: 50
      }}>
        <img src={paperPlane} alt='subscrine button' style={{
          width: '100%'}} />
      </div>
    </div>
  </>
  );
};
