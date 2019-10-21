import {
  useTheme,
  Grid,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import Link from 'next/link';

import { theme as defaultTheme } from '../../theme';
import { InsideSlide } from '../effects';

export const Vshsdt = ({ 
  screen, 
  justify,
  alignItems
}) => {
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
    <ThemeProvider theme={defaultTheme}>
      <Grid container justify={justify} alignItems={alignItems}>
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
      </Grid>
    </ThemeProvider>
  );
};

export default Vshsdt;
  