import '../imports/i18n';

import { ThemeProvider } from '@material-ui/styles';
import React, { useCallback } from 'react';
import { useSpring, useTrail, animated as a, interpolate } from 'react-spring';

import { Body } from '../imports/components/body';
import { theme as defaultTheme } from '../imports/theme';
import { wrapPage } from '../imports/wrap-page';
import { Spacing } from '../imports/components/spacing';
import { InsideSlide } from '../imports/components/effects';
import { Draw } from '../imports/components/draw';
import HeaderFacults from '../imports/components/vshsdt/header-facults';
import { ScreenOne } from '../imports/components/vshsdt/screen-one';
import { ScreenTwo } from '../imports/components/vshsdt/screen-two';
import { ScreenThree } from '../imports/components/vshsdt/screen-three';
import { ScreenFour } from '../imports/components/vshsdt/screen-four';
import { ScreenFive } from '../imports/components/vshsdt/screen-five';

export default () => {
  const [springProps, setSpring] = useSpring(() => ({ s: 0, spx: 0, config: { mass: 5, tension: 350, friction: 40 } }));

  // const trail = useTrail(items.length, {
  //   config,
  //   opacity: toggle ? 1 : 0,
  //   x: toggle ? 0 : 20,
  //   height: toggle ? 80 : 0,
  //   from: { opacity: 0, x: 20, height: 0 },
  // })

  const onScroll = useCallback(e => {
    return setSpring({
      s: e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight),
      spx: e.target.scrollTop,
    });
  }, []);
  
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <div 
          onScroll={onScroll}
          onMouseMove={({ clientX: x, clientY: y }) => setSpring({ xys: [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1] })}
          style={{
            position: 'fixed',
            left: 0, top: 0,
            width: '100%',
            height: '100%',
            overflow: 'scroll',
          }}
        >
          <Body>
            {/*<HeaderFacults screen={'style'}/>*/}
            <ScreenOne springProps={springProps} setSpring={setSpring} />
            <Spacing size={30} />
            <ScreenTwo springProps={springProps} setSpring={setSpring} />
            <Spacing size={30} />
            <ScreenFour />
            <Spacing size={30} />
            <ScreenThree />
           
            <Spacing size={30} />
            <ScreenFive />
          </Body>
        </div>
      </ThemeProvider>
    </>
  );
};
