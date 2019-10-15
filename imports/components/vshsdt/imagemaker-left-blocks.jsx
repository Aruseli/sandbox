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

import {Picture} from './left-block-imagemaker/picture';
import {Text} from './left-block-imagemaker/text';


export const LeftBlocks = ({}) => {
  return (
    <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
    }}>
      <Picture 
        left='50%'
        top='10%'
        width='50%'
        height='35%'
        src='https://ege-merlin.ru/uploads/blog/2017_October/P3.jpg'
        alt='Длительность обучения'
      />
      <Text 
        left='11%'
        top='2%'
        width={140}
        height={60}
      >
        <Typography component='h1' variant='h6' align="center">11 месяцев</Typography>
      </Text>
    </div>
  );
}
    