import {
  makeStyles,
  Grid,
  Hidden,
  Tabs,
  Tab
} from '@material-ui/core';

import React, {useState} from 'react';

import {LeftBlocks} from './imagemaker-left-blocks';
import { ProgrammBlock } from './programm-block';
import { Footer } from './footer';


export const Imagemaker = ({}) => {
  const [value, setValue] = useState('course');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
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
        ? <LeftBlocks marginLeft={0} />
        : <ProgrammBlock />
        }
      </Hidden>
      <Hidden implementation='css' smDown>
        <Grid
          container
          justify='center'
          alignItems='flex-start'
        >
          <Grid item xs={7}>
            <LeftBlocks marginLeft={15} />
          </Grid>
          <Grid item xs={5}>
            <ProgrammBlock style={{
              marginLeft: 20,
              marginRight: 20
            }} />
          </Grid>
        </Grid>
      </Hidden>
      <Footer paddingTop={100} />
    </>
  );
}
  