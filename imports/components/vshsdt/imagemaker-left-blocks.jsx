import React from 'react';

import {ScreenOne} from './left-block-imagemaker/screens/screen-one-imagemaker';
import {ScreenTwo} from './left-block-imagemaker/screens/screen-two-imagemaker';
import {ScreenThree} from './left-block-imagemaker/screens/screen-three-imagemaker';
import {ScreenFour} from './left-block-imagemaker/screens/screen-four-imagemaker';
import {ScreenFive} from './left-block-imagemaker/screens/screen-five-imagemaker';
import {ScreenSix} from './left-block-imagemaker/screens/screen-six-imagemaker';
import {Modules} from './left-block-imagemaker/screens/modules';

export const LeftBlocks = ({marginLeft}) => {
  
  return (<>
    <ScreenOne />
    <ScreenTwo />
    <ScreenThree marginLeft={marginLeft} />
    <ScreenFour marginLeft={marginLeft} />
    <ScreenFive />
    <ScreenSix />
    <Modules />
  </>);
}
    