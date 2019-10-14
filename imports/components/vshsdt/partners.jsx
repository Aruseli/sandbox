import {
  makeStyles,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Hidden,
  } from '@material-ui/core';
  
  import React from 'react';
  
  import { animated as a, interpolate } from 'react-spring';
  
  import { Container } from '../container';
  
  const useStyles = makeStyles(theme => ({
  root: {
  background: theme.palette.primary.main,
  },
  }));
  
  const imagemaker = require('../../../images/3.jpeg');
  const course = require('../../../images/4.jpeg');
  const partners = require('../../../images/partners.jpeg');
  const contacts = require('../../../images/contacts.jpg');
  const rgsu = require('../../../images/rgsu.png');
  const rgutis = require('../../../images/rgutis.png');
  const vshsn = require('../../../images/vshsn.png');
  
  export const Partners = ({ 
  // springProps: {spx}, setSpring, 
  ...props }) => {
  
  // const item3 = interpolate([spx], (spx) => `translateY(${spx}px)`);
  
  const classes = useStyles({});
  
  return (
  <>
  <Hidden xsDown>
    <Typography variant='h3' component='h2' align="center">Наши партнеры</Typography>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={4}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={4}
          >
          <Grid item xs={3}>
            <img src={rgsu} alt="Российский государственный социальный университет" style={{
              width: '100%',
              height: '100%'
            }} />
          </Grid>
          <Grid item xs={3}>
            <img src={rgutis} alt="Российский государственный университет туризма и сервиса" style={{
              width: '100%',
              height: '100%'
            }} />
          </Grid>
          <Grid item xs={3}>
            <img src={vshsn} alt="Высшая школа стилистики" style={{
              width: '100%',
              height: '100%'
            }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Hidden>
  </>
  );
};
  