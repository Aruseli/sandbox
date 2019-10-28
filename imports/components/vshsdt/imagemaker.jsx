import {
  makeStyles,
  Grid,
  Hidden,
  Tabs,
  Tab,
  Container
} from '@material-ui/core';

import React, {useState, useRef} from 'react';
import { useSpring } from 'react-spring';

import {LeftBlocks} from './imagemaker-left-blocks';
import { ProgrammBlock } from './programm-block';
import { Footer } from './footer';

export const Imagemaker = ({}) => {
  const [value, setValue] = useState('course');
  const [springProps, setSpring] = useSpring(() => ({
    spx: 0, 
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const leftBlockRef = useRef();
  const rightBlockRef = useRef();
  const documentHeightRef = useRef();

  const getTop = (ref) => ref.current ? ref.current.offsetTop : 0;

  const leftBlockHeight = (leftBlockRef) => leftBlockRef.current ? leftBlockRef.current.offsetHeight : 0;
    console.log(leftBlockRef);

  const rightBlockHeight = (rightBlockRef) => rightBlockRef.current ? rightBlockRef.current.offsetHeight : 0;
    console.log(rightBlockRef);

  const documentHeight = (documentHeightRef) => documentHeightRef.current ? documentHeightRef.current.scrollHeight : 0;
    console.log(documentHeightRef);

  const leftBlockTop = (leftBlockRef) => leftBlockRef.current ? leftBlockRef.current.offsetTop : 0;
    console.log(leftBlockRef);

  const rightBlockTop = (rightBlockRef) => rightBlockRef.current ? rightBlockRef.current.offsetTop : 0;
    console.log(rightBlockRef);

  const onScroll = e => {
    console.log(leftBlockRef);
    return setSpring({
      spx: e.target.scrollTop,
    });
  };

  return (
    <div ref={documentHeightRef}
      onScroll={onScroll}
    >
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
        : <Container>
          <ProgrammBlock />
        </Container> 
        }
      </Hidden>
      <Hidden implementation='css' smDown>
        <Grid
          container
          justify='center'
          alignItems='flex-start'
        >
          <Grid item xs={7} ref={leftBlockRef}>
            <LeftBlocks marginLeft={15}  />
          </Grid>
          <Grid item xs={5} ref={rightBlockRef}>
            <ProgrammBlock style={{
              marginLeft: 20,
              marginRight: 20
            }} />
          </Grid>
        </Grid>
      </Hidden>
      <Footer paddingTop={100} />
    </div>
  );
}
  