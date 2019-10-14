import {
  makeStyles,
  Grid,
  Typography,
  Hidden,
} from '@material-ui/core';

import React from 'react';

import { animated as a, interpolate } from 'react-spring';

import { Container } from '../container';
import { Spacing } from '../spacing';
import {useRandomiseString} from '../use-randomise-string';
import { DriveEtaSharp } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main,
  },
}));

const svg = require('../../../images/shadowed-logo.svg');
const imageFomina = require('../../../images/fomina.jpg');
const imageMain = require('../../../images/fall.jpg');

export const ScreenTwo = ({springProps: {spx}, setSpring, ...props }) => {
  const item3 = interpolate([spx], (spx) => `translateY(${spx - 550 <= 0 ? spx - 550 : 0}px)`);
  const item4 = interpolate([spx], (spx) => `opacity(${spx}px)`);
  const item = ['Татьяна', 'Фомина'];

  const classes = useStyles({});
  // const theme = useTheme();
  // const xsDown = useMediaQuery(theme.breakpoints.down('xs'));

  const randomString = useRandomiseString({string: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.`});

  return (
    <>
      <Hidden xsDown>
        <Container smSize={20} mdSize={80}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={8}
            >
            {/*  лучше ограничить левую часть sm={4} md={3} */}
            <Grid item xs={5}>
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center">
                <Grid
                  item
                  xs={8}
                  style={{
                    height: '45vh',
                  }}>
                  <div
                    style={{
                      background: 'white',
                      overflow: 'hidden',
                      width: '100%',
                      height: '100%',
                    }}>
                    <a.div 
                      style={{ transform: item3 }}>
                      <img
                        src={imageMain}
                        alt="main"
                        style={{
                          width: '100%',
                        }}
                      />
                    </a.div>
                  </div>
                </Grid>
              </Grid>
              <Spacing size={6} />
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center">
                <Grid
                  item
                  xs={8}
                  style={{
                    height: '35vh',
                  }}>
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: 'blue',
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <div
                    style={{
                      paddingLeft: 20,
                    }}>
                    <Typography variant="h4" component="h3">
                      {item}
                    </Typography>
                  </div>
                </Grid>
              </Grid>
              {/* <Spacing size={4} /> */}
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center">
                <Grid
                  item
                  xs={4}
                  style={{
                    height: '20vh',
                  }}>
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: '#ced2ce',
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={7}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                <Grid item>
                  <Typography variant="h3" component="h2" align="left">
                    Команда
                  </Typography>
                </Grid>
              </Grid>
              <Spacing size={10} />
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-end">
                <Grid item xs={6}>
                  <div
                    style={{
                      position: 'relative',
                    }}>
                    <div
                      style={{
                        background: 'rgba(206, 210, 206, 0.36)',
                        position: 'absolute',
                        top: '43%',
                        width: '100%',
                        height: '75%',
                        zIndex: 1,
                      }}
                    />
                    <div
                      style={{
                        position: 'relative',
                        zIndex: 2,
                      }}>
                      <Typography
                        variant="body1"
                        component="p"
                        style={{
                          padding: '20px 30px',
                          lineHeight: 2,
                        }}>
                        {randomString}
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <img
                    src={imageFomina}
                    alt="fomina"
                    style={{
                      width: '100%',
                    }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-end">
                <Grid item>
                  <div
                    style={{
                      width: 10,
                      height: 10,
                    }}>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        color: 'rgba(19, 13, 19, 0.78)',
                      }}
                    />
                  </div>
                </Grid>
                <Grid item>
                  <div
                    style={{
                      width: 10,
                      height: 10,
                    }}>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        color: '#696569ab',
                      }}
                    />
                  </div>
                </Grid>
                <Grid item>
                  <div
                    style={{
                      width: 10,
                      DriveEtaSharp
                    }}>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        color: '#696569ab',
                      }}
                    />
                  </div>
                </Grid>
                <Grid item>
                  <div
                    style={{
                      width: 10,
                      height: 10,
                    }}>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        color: '#696569ab',
                      }}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Hidden>
      {/* <Hidden smUp /> */}
    </>
  );
};
