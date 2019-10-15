import {
  Grid,
} from '@material-ui/core';

import React from 'react';

import { animated as a, interpolate } from 'react-spring';

import {BlocksPosition} from './blocks-position';

export const Text = ({
  left,
  top,
  width,
  height,
  children,
}) => {
  return (
    <BlocksPosition left={left} top={top} width={width} height={height}>
      <Grid
        container
        justify='center'
        alignItems='center'
        style={{
          height: '100%'
        }}
        >
        <Grid item>
          {children}
        </Grid>
      </Grid>
    </BlocksPosition>  
  );
}
  