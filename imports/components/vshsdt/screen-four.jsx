import React from "react";

import { makeStyles, Typography, Hidden, Grid } from "@material-ui/core";

import '../../i18n';

import { Container } from '../container';

const diploma = require("../../../images/diploma.jpeg");

export const ScreenFour = ({...props}) => {
  return(
    <Container smSize={20} mdSize={80}>
      <Grid container justify='center' alignItems='center' 
        // style={{height: '80vh'}}
        spacing={8}  
      >
        <Grid item xs={3}>
          <div>
            <Typography variant='h3' component='h2'>Очно</Typography>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.</Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
          <img src={diploma} style={{width: '100%'}} />
        </Grid>
        <Grid item xs={3}>
          <div>
            <Typography variant='h3' component='h2'>Online</Typography>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.</Typography>
          </div>
        </Grid>
      </Grid>  
    </Container>
  )
}