import '../imports/i18n';

import { ThemeProvider } from '@material-ui/styles';
import React, { useCallback } from 'react';
import { useSpring, useTrail, animated as a, interpolate } from 'react-spring';

import { Body } from '../imports/components/body';
import { theme as defaultTheme } from '../imports/theme';
import { Spacing } from '../imports/components/spacing';
import HeaderFacults from '../imports/components/vshsdt/header-facults';
import {Main} from "../imports/components/vshsdt/main";
import {Calendar} from "../imports/components/vshsdt/calendar";
import {Partners} from "../imports/components/vshsdt/partners";

export default () => {
  const [springProps, setSpring] = useSpring(() => ({ xys: [0,0,1], s: 0, spx: 0, config: { mass: 5, tension: 350, friction: 40 } }));

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
          onMouseMove={({ clientX: x, clientY: y }) => setSpring({ xys: [(y - window.innerHeight / 2), (x - window.innerWidth / 2), 1.1] })}
          style={{
            position: 'fixed',
            left: 0, top: 0,
            width: '100%',
            height: '100%',
            overflow: 'scroll',
          }}
        >
          <Body>
            <HeaderFacults screen={'style'}/>
            <Spacing size={30} />
            <Main springProps={springProps} />
            <Spacing size={30} />
            <Calendar />
            <Spacing size={30} />
            <Partners />
          </Body>
        </div>
      </ThemeProvider>
    </>
  );
};
