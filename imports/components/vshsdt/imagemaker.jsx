import {
  Grid,
  Hidden,
  Tabs,
  Tab,
  Container
} from '@material-ui/core';

import React, {useState} from 'react';

import {LeftBlocks} from './imagemaker-left-blocks';
import { ProgrammBlock } from './programm-block';

export const Imagemaker = ({ leftBlockRef, rightBlockRef }) => {
  const [value, setValue] = useState('course');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <Grid item xs={7} ref={leftBlockRef}>
            <LeftBlocks />
          </Grid>
          <Grid item xs={5} ref={rightBlockRef}>
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
  