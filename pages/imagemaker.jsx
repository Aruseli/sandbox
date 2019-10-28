import '../imports/i18n';

import { ThemeProvider } from '@material-ui/styles';
import {Grid, Typography, Hidden} from '@material-ui/core';
import React, {useCallback} from 'react';
import { useSpring } from 'react-spring';

import { Body } from '../imports/components/body';
import { theme as defaultTheme } from '../imports/theme';
import Vshsdt from '../imports/components/vshsdt/vshsdt';
import {Imagemaker} from '../imports/components/vshsdt/imagemaker';

export const SpringContext = React.createContext();

export default () => {
  const [springProps, setSpring] = useSpring(() => ({
    s: 0,
    spx: 0, // scrollTop in px
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const onScroll = useCallback(e => {
    return setSpring({
      s: e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight),
      spx: e.target.scrollTop,
    });
  }, []);
  
  return (
  <>
    <ThemeProvider theme={defaultTheme}>
      <SpringContext.Provider value={springProps}>
        <div
          id="scrollable-page"
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
            <Grid container>
              <Grid item xs={6}>
                <Grid
                  container
                  justify='flex-start'
                  alignItems='flex-start'
                >
                  <Grid item>
                    <Typography component="h1" variant="h4" style={{marginLeft: 20, marginTop: 20}}>Имиджмейкер<br />Второе высшее</Typography>
                  </Grid>
                </Grid>
              </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Vshsdt 
                    screen={'style'} 
                    justify='flex-end'
                    alignItems='flex-end'
                  />
                </Grid>
            </Grid>
            {/* <Spacing size={30} /> */}
            <Imagemaker />
          </Body>
        </div>
      </SpringContext.Provider>
    </ThemeProvider>
  </>
  );
};
