import React from 'react';

import {Hidden} from '@material-ui/core';

import {ScreenOne} from './left-block-imagemaker/screens/screen-one-imagemaker';
import {ScreenTwo} from './left-block-imagemaker/screens/screen-two-imagemaker';
import {ScreenThree} from './left-block-imagemaker/screens/screen-three-imagemaker';
import {ScreenFour} from './left-block-imagemaker/screens/screen-four-imagemaker';
import {ScreenFive} from './left-block-imagemaker/screens/screen-five-imagemaker';
import {ScreenSix} from './left-block-imagemaker/screens/screen-six-imagemaker';
import {Modules} from './left-block-imagemaker/screens/modules';
import {MobileFreeFourScreen} from './left-block-imagemaker/screens/screen-for-six-blocks';

export const LeftBlocks = ({marginLeft}) => {
  
  return (<>
    <ScreenOne />
    <ScreenTwo />
    <Hidden smDown implementation="css">
      <ScreenThree marginLeft={marginLeft} />
      <ScreenFour marginLeft={marginLeft} />
    </Hidden>
    <Hidden mdUp implementation="css">
      <MobileFreeFourScreen />
    </Hidden>
    <ScreenFive />
    <ScreenSix />
    <Modules />
  </>);
}
    