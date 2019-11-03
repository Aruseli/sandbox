import React from 'react';

import {ScreenOne} from './left-block-imagemaker/screens/screen-one-imagemaker';
import {ScreenTwo} from './left-block-imagemaker/screens/screen-two-imagemaker';
import {ScreenFive} from './left-block-imagemaker/screens/screen-five-imagemaker';
import {ScreenSix} from './left-block-imagemaker/screens/screen-six-imagemaker';
import {Modules} from './left-block-imagemaker/screens/modules';
import {MobileFreeFourScreen} from './left-block-imagemaker/screens/screen-for-six-blocks';

export const LeftBlocks = ({marginLeft, ...style}) => {
  
  return (<>
    <ScreenOne />
    <ScreenTwo />
    <MobileFreeFourScreen />
    <ScreenFive />
    <ScreenSix />
    <Modules />
  </>);
}
    