import {
  makeStyles,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from '@material-ui/core';

import React from 'react';

import { animated as a, interpolate } from 'react-spring';

import { Container } from '../container';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main,
  },
  position: {
    [theme.breakpoints.between('md', 'lg')]: {
      position: 'relative',
      top: 100,
      right: 100,
    },
    [theme.breakpoints.only('sm')]: {
      position: 'relative',
      top: 30,
      right: 0,
    },
  },
}));

const svg = require('../../../images/shadowed-logo.svg');
const svgBorder = require('../../../images/border-logo.svg');
const imageMain = require('../../../images/fall.jpg');

export const ScreenOne = ({ springProps: {spx}, setSpring, ...props }) => {

  const item3 = interpolate([spx], (spx) => `translateY(${spx}px)`);

  const classes = useStyles({});

  return (
    <>
      <Hidden xsDown>
        <div
          style={{
            position: 'relative',
            height: '100vh'
          }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1,
              width: '100%',
              height: '100%',
            }}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{
                height: '100%',
              }}>
              <Grid
                item
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '50vh',
                  maxHeight: '90vw',
                  width: '50vh',
                  maxWidth: '90vw',
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
                <img 
                  src={svgBorder}
                  alt="logo border"
                  style={{
                    position: 'absolute',
                    top: '-3%',
                    left: '-3%',
                    width: '106%',
                    height: '106%',
                    zIndex: -1
                  }}
                />
                <img
                  src={svg}
                  alt="main"
                  style={{
                    position: 'absolute',
                    top: '-3%',
                    left: '-3%',
                    width: '106%',
                    height: '106%',
                  }}
                />
              </Grid>
            </Grid>
          </div>
          <div
            style={{
              position: 'relative',
              zIndex: 4,
              height: '100%'
            }}>
            <Container smSize={20} mdSize={30} style={{ height: '100%' }}>
              <div style={{
                position: 'asolute',
                top: 0,
                left: 0
              }}>
                  <Grid
                  container
                  justify="space-between"
                  alignItems="center"
                  >
                    <Grid item>
                      <div style={{
                        paddingLeft: 100,
                        paddingTop: 100
                      }}>
                        <Typography variant="h2" component="h1" align="center">
                          СТИЛИСТИКИ
                        </Typography>
                        <Typography variant="h5" component="h2" align="right">
                          факультет
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item>
                      <List className={classes.position}>
                        <ListItem>
                          <ListItemText primary="Команда" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="Ближайщие курсы" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="Отзывы" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="Контакты" />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0
                }}>
                  <Grid
                    container
                    alignItems='center'
                    justify='center'>
                    <Grid item xs={7}>
                      <Typography variant="body1" component="p" align="center">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
            </Container>
          </div>
        </div>
      </Hidden>
      <Hidden smUp>
        {/* Name of faculty */}
        <Container smSize={20} mdSize={30}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={8}>
            <Grid item>
              <Typography variant="h4" component="h1" align="center">
                СТИЛИСТИКИ
              </Typography>
              <Typography variant="h6" component="h2" align="right">
                факультет
              </Typography>
            </Grid>
          </Grid>
        </Container>

        {/* logo */}
        <div
          style={{
            zIndex: 1,
            width: '100%',
            height: '100%',
          }}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{
              height: '100%',
            }}>
            <Grid
              item
              style={{
                position: 'relative',
                overflow: 'hidden',
                height: '50vh',
                maxHeight: '90vw',
                width: '50vh',
                maxWidth: '90vw',
              }}>
              <img
                src={imageMain}
                alt="main"
                style={{
                  width: '100%',
                }}
              />
              <img
                src={svg}
                alt="main"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              />
            </Grid>
          </Grid>
        </div>

        {/* List of menu   */}
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <List>
              <ListItem>
                <ListItemText primary="Команда" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Ближайщие курсы" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Отзывы" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Контакты" />
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            <div>
              <Typography variant="body1" component="p" align="center">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
};
