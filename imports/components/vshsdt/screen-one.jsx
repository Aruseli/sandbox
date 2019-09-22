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
const imageMain = require('../../../images/fall.jpg');

export const ScreenOne = ({ ...props }) => {
  const classes = useStyles({});
  // const theme = useTheme();
  // const xsDown = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <>
      <Hidden xsDown>
        <div
          style={{
            position: 'relative',
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
            }}>
            <Container smSize={20} mdSize={30}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                spacing={8}>
                <Grid
                  item
                  style={{
                    position: 'relative',
                    left: 200,
                  }}>
                  <Typography variant="h4" component="h1" align="center">
                    СТИЛИСТИКИ
                  </Typography>
                  <Typography variant="h6" component="h2" align="right">
                    факультет
                  </Typography>
                </Grid>
                <Grid item className={classes.position}>
                  <List>
                    <ListItem>
                      <ListItemText primary="Ближайщие курсы" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Команда" />
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
            </Container>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center">
              <Grid
                item
                xs={6}
                style={{
                  paddingTop: 230,
                }}>
                <div>
                  <Typography variant="body1" component="p" align="center">
                    о факультете о факультете о факультете о факультете о
                    факультете о факультете о факультете о факультете
                  </Typography>
                </div>
              </Grid>
            </Grid>
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
                <ListItemText primary="Ближайщие курсы" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Команда" />
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
                о факультете о факультете о факультете о факультете о факультете
                о факультете о факультете о факультете
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
};
