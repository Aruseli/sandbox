import {
  Grid,
  Hidden,
  Tabs,
  Tab,
  Container
} from '@material-ui/core';

import React, {useState, useContext} from 'react';

import {LeftBlocks} from './imagemaker-left-blocks';
import { ProgrammBlock } from './programm-block';
import {SpringContext} from '../../../pages/imagemaker';

import { interpolate, animated as a } from 'react-spring';

export const Imagemaker = ({ leftBlockRef, rightBlockRef }) => {
  const [value, setValue] = useState('course');
  const {translateY, rightIsMore} = useContext(SpringContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const transformL = interpolate([translateY, rightIsMore], (translateY, rightIsMore) => `translateY(${rightIsMore ? translateY : 0}px)`);
  const transformR = interpolate([translateY, rightIsMore], (translateY, rightIsMore) => `translateY(${!rightIsMore ? translateY : 0}px)`);

  return (
    <div>
      <Hidden implementation='css' mdUp>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Курс" value={'course'} />
          <Tab label="Программа" value={'programm'} />
        </Tabs>
        {value == 'course' 
        ? <LeftBlocks />
        : <Container>
          <ProgrammBlock />
        </Container> 
        }
      </Hidden>
      <Hidden implementation='css' smDown>
        <Grid
          container
          display='row'
          justify='center'
          alignItems='flex-start'
          // spaicing={4}
        >
          <Grid item xs={7} ref={leftBlockRef} component={a.div} style={{
            transform: transformL
          }}>
            <LeftBlocks />
          </Grid>
          <Grid item xs={5} ref={rightBlockRef} component={a.div} style={{
            transform: transformR
          }}>
            <ProgrammBlock style={{
              marginLeft: 20,
              marginRight: 20
            }} />
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
}
  