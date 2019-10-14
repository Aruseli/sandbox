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

import {LeftBlocks} from './imagemaker-left-blocks';
import { ProgrammBlock } from './programm-block';
import { Footer } from './footer';


export const Imagemaker = ({}) => {
  return (
    <>
      <Grid
        container
        justify='center'
        alignItems='flex-start'
      >
        <Grid item xs={7} style={{
          height: '100vh'
        }}>
          <LeftBlocks />
        </Grid>
        <Grid item xs={5}>
          <ProgrammBlock />
        </Grid>
      </Grid>
      <Footer paddingTop='100' />
    </>
  );
}
  