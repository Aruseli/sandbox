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
  style,
  WrapComponent,
  wrapComponentProps,
  onClick
}) => {
  return (
    <BlocksPosition 
      left={left} 
      top={top} 
      width={width} 
      height={height} 
      style={style}
      WrapComponent={WrapComponent}
      wrapComponentProps={wrapComponentProps}
      onClick={onClick}
    >
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
  