import '../imports/i18n';

import { ThemeProvider } from '@material-ui/styles';
import {Grid, Typography, Hidden} from '@material-ui/core';
import React, {useCallback, useRef} from 'react';
import { useSpring } from 'react-spring';

import { Body } from '../imports/components/body';
import { theme as defaultTheme } from '../imports/theme';
import Vshsdt from '../imports/components/vshsdt/vshsdt';
import {Imagemaker} from '../imports/components/vshsdt/imagemaker';
import {Footer} from '../imports/components/vshsdt/footer';

export const SpringContext = React.createContext();

export default () => {
  const [springProps, setSpring] = useSpring(() => ({
    s: 0,
    spx: 0, // scrollTop in px
    sh: 0,
    xys: [0, 0, 1],
    translateY: 0,
    rightIsMore: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const leftBlockRef = useRef();
  const rightBlockRef = useRef();
  const scrollRef = useRef();

  const leftBlockHeight = (leftBlockRef) => leftBlockRef.current ? leftBlockRef.current.offsetHeight : 0;
  const rightBlockHeight = (rightBlockRef) => rightBlockRef.current ? rightBlockRef.current.offsetHeight : 0;
  const scrollTop = (scrollRef) => scrollRef.current ? scrollRef.current.scrollTop : 0;
  const scrollHeight = (scrollRef) => scrollRef.current ? scrollRef.current.offsetHeight : 0;
  const leftBlockTop = (leftBlockRef) => leftBlockRef.current ? leftBlockRef.current.offsetTop : 0;
  const rightBlockTop = (rightBlockRef) => rightBlockRef.current ? rightBlockRef.current.offsetTop : 0;

  const onScroll = useCallback(e => {
    const input = {
      leftBlockHeight: leftBlockHeight(leftBlockRef),
      rightBlockHeight: rightBlockHeight(rightBlockRef),
      scrollTop: scrollTop(scrollRef),
      scrollHeight: scrollHeight(scrollRef),
      leftBlockTop: leftBlockTop(leftBlockRef),
      rightBlockTop: rightBlockTop(rightBlockRef),
    };

    input.rightIsMore = input.leftBlockHeight < input.rightBlockHeight;

    const vars = {
      mh: input.rightIsMore ? input.rightBlockHeight : input.leftBlockHeight,
      lh: input.rightIsMore ? input.leftBlockHeight : input.rightBlockHeight,
      mt: input.rightBlockTop,
      spx: e.target.scrollTop,
      wh: input.scrollHeight,
    }

    vars.diffH = vars.mh - vars.lh;
    vars.mb = vars.mh + vars.mt;
    vars.spxT = vars.mt;
    vars.spxB = vars.mb - vars.wh;
    vars.spxT0 = vars.spxT - vars.mt;
    vars.spxB0 = vars.spxB - vars.mt;
    vars.spx0 = vars.spx - vars.mt;
    vars.p = vars.spx0 * 100 / vars.spxB0;
    vars.translateY = vars.diffH * vars.p / 100;

    return setSpring({
      s: e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight),
      spx: vars.spx,
      sh: e.target.offsetHeight,
      translateY: vars.spx < vars.spxT ? 0 : vars.spx > vars.spxB ? vars.diffH : vars.translateY,
      rightIsMore: input.rightIsMore ? 1 : 0,
    });
  }, []);
  
  return (
  <>
    <ThemeProvider theme={defaultTheme}>
      <SpringContext.Provider value={springProps}>
        <div
          id="scrollable-page"
          onScroll={onScroll}
          ref={scrollRef}
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
            <Imagemaker {...{ leftBlockRef, rightBlockRef, scrollRef }}/>
            <Footer paddingTop={100} />
          </Body>
        </div>
      </SpringContext.Provider>
    </ThemeProvider>
  </>
  );
};
