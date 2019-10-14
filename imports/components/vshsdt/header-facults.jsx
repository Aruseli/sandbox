import {
  useTheme,
  Grid,
  Typography,
  useMediaQuery,
  Paper,
  Button
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Parallax, Background } from 'react-parallax';
import Link from 'next/link';

import { Body } from '../body';
import { theme as defaultTheme } from '../../theme';
import { wrapPage } from '../../wrap-page';
import { Spacing } from '../spacing';
import { InsideSlide } from '../effects';
import { Draw } from '../draw';
import Vivus from 'vivus';

export const HeaderFacults = ({ screen }) => {
  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));

  const vsh = (
    <Typography variant="h4" component="h1" align="center">
      #ВШ
      <span style={{ position: 'relative', display: 'inline-block' }}>
        С
        <div
          style={{
            position: 'absolute',
            bottom: -4,
            width: '100%',
            height: 5
          }}>
          <InsideSlide revealProps={{ top: true, delay: 1200 }}>
            <div
              style={{ width: '100%', height: '100%', background: '#ffaf36' }}
            />
          </InsideSlide>
        </div>
      </span>
      <span style={{ position: 'relative', display: 'inline-block' }}>
        Д
        <div
          style={{
            position: 'absolute',
            bottom: -4,
            width: '100%',
            height: 5
          }}>
          <InsideSlide revealProps={{ top: true, delay: 1000 }}>
            <div
              style={{ width: '100%', height: '100%', background: '#cb66f5' }}
            />
          </InsideSlide>
        </div>
      </span>
      <span style={{ position: 'relative', display: 'inline-block' }}>
        Т
        <div
          style={{
            position: 'absolute',
            bottom: -4,
            width: '100%',
            height: 5
          }}>
          <InsideSlide revealProps={{ top: true, delay: 1300 }}>
            <div
              style={{ width: '100%', height: '100%', background: '#0798ff' }}
            />
          </InsideSlide>
        </div>
      </span>
    </Typography>
  );

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Grid
          container
          justify="center"
          alignItems="center">
          <Grid item xs={12} sm={8} md={10} lg={8}>
            <Grid container justify="center" alignItems="center">
              <Grid
                item
                xs={12}
                style={{
                  overflow: 'hidden',
                  transition: 'all 1s ease',
                  height: screen ? 0 : 111
                }}>
                <Link href="/">
                  <div
                    style={{
                      padding: 36,
                      transition: 'all 1s ease',
                      position: 'relative',
                      top: screen ? 50 : 0
                    }}>
                    {vsh}
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                style={{
                  overflow: 'hidden',
                  transition: 'all 1s ease',
                  width: screen ? 240 : 0
                }}>
                <Link href="/">
                  <div style={{ cursor: 'pointer', padding: 36, width: 220 }}>
                    {vsh}
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                xs={xsDown ? 12 : undefined}
                style={
                  screen
                    ? {}
                    : {
                        position: 'relative',
                        ...(xsDown ? { left: -6 } : { top: -6 })
                      }
                }>
                <Link href="/style">
                  <div
                    style={{
                      cursor: 'pointer',
                      transition: 'all 1s ease',
                      padding: screen ? (screen === 'style' ? 12 : 6) : 42,
                      width: 150,
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      margin: '0 auto'
                    }}>
                    <Slide
                      right={!xsDown}
                      bottom={xsDown}
                      ssrReveal
                      delay={1000}>
                      <div
                        style={{
                          background: '#ffaf36',
                          position: 'absolute',
                          zIndex: 1,
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%'
                        }}
                      />
                    </Slide>
                    <div
                      style={{
                        position: 'relative',
                        zIndex: 2
                      }}>
                      {!screen && (
                        <Draw
                          id="_draw_1"
                          animTimingFunction={Vivus.EASE_IN_OUT}
                          type="oneByOne"
                          duration={100}
                          file={'/static/logo-style.svg'}
                        />
                      )}
                      <Typography variant="h5" component="h5" align="center">
                        Стилистики
                      </Typography>
                      <Typography variant="body1" component="div" align="right">
                        факультет
                      </Typography>
                    </div>
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                xs={xsDown ? 12 : undefined}
                style={
                  screen
                    ? { zIndex: 5, position: 'relative' }
                    : {
                        zIndex: 5,
                        position: 'relative',
                        ...(xsDown ? { left: 5 } : {})
                      }
                }>
                <Link href="/design">
                  <div
                    style={{
                      cursor: 'pointer',
                      transition: 'all 1s ease',
                      padding: screen ? (screen === 'design' ? 12 : 6) : 42,
                      width: 150,
                      textAlign: 'center',
                      position: 'relative',
                      margin: '0 auto'
                    }}>
                    <Slide top={!xsDown} right={xsDown} ssrReveal delay={0}>
                      <div
                        style={{
                          background: '#cb66f5',
                          position: 'absolute',
                          zIndex: 1,
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          transition: 'all 1s ease',
                          boxShadow: screen
                            ? '0 0 0 0 transparent'
                            : '0 5px 15px 0 #00000052'
                        }}
                      />
                    </Slide>
                    <div
                      style={{
                        position: 'relative',
                        zIndex: 2
                      }}>
                      {!screen && (
                        <Draw
                          id="_draw_2"
                          animTimingFunction={Vivus.EASE_IN_OUT}
                          type="oneByOne"
                          duration={2000}
                          file={'/static/logo-design.svg'}
                        />
                      )}
                      <Typography variant="h5" component="h5" align="center">
                        Дизайна
                      </Typography>
                      <Typography variant="body1" component="div" align="right">
                        факультет
                      </Typography>
                    </div>
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                xs={xsDown ? 12 : undefined}
                style={
                  screen
                    ? {}
                    : {
                        position: 'relative',
                        ...(xsDown ? { left: -12 } : { top: -15 })
                      }
                }>
                <Link href="/tech">
                  <div
                    style={{
                      cursor: 'pointer',
                      transition: 'all 1s ease',
                      padding: screen ? (screen === 'tech' ? 12 : 6) : 42,
                      width: 150,
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      margin: '0 auto'
                    }}>
                    <Slide left={!xsDown} top={xsDown} ssrReveal delay={1000}>
                      <div
                        style={{
                          background: '#0798ff',
                          position: 'absolute',
                          zIndex: 1,
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%'
                        }}
                      />
                    </Slide>
                    <div
                      style={{
                        position: 'relative',
                        zIndex: 2
                      }}>
                      {!screen && (
                        <Draw
                          id="_draw_3"
                          animTimingFunction={Vivus.EASE_IN_OUT}
                          type="oneByOne"
                          duration={300}
                          file={'/static/logo-tech.svg'}
                        />
                      )}
                      <Typography variant="h5" component="h5" align="center">
                        Технологий
                      </Typography>
                      <Typography variant="body1" component="div" align="right">
                        факультет
                      </Typography>
                    </div>
                  </div>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default HeaderFacults;
