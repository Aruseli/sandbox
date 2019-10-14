import '../imports/i18n';

import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { useSpring, useTrail, animated as a, interpolate } from 'react-spring';

import { Body } from '../imports/components/body';
import { theme as defaultTheme } from '../imports/theme';
import { Spacing } from '../imports/components/spacing';
import HeaderFacults from '../imports/components/vshsdt/header-facults';
import {Imagemaker} from '../imports/components/vshsdt/imagemaker';

export default () => {
  
  return (
  <>
    <ThemeProvider theme={defaultTheme}>
    {/* <div 
      onScroll={onScroll}
      onMouseMove={({ clientX: x, clientY: y }) => setSpring({ xys: [(y - window.innerHeight / 2), (x - window.innerWidth / 2), 1.1] })}
      style={{
      position: 'fixed',
      left: 0, top: 0,
      width: '100%',
      height: '100%',
      overflow: 'scroll',
      }}
    > */}
      <Body>
        <HeaderFacults screen={'style'}/>
        {/* <Spacing size={30} /> */}
        <Imagemaker />
      </Body>
    {/* </div> */}
    </ThemeProvider>
  </>
  );
};
