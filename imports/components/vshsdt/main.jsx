import {
  makeStyles,
  Grid,
  Typography,
  Hidden,
  } from '@material-ui/core';

  import Link from 'next/link'
  
  import React from 'react';
  
  import { animated as a, interpolate } from 'react-spring';
  
  import { Container } from '../container';
  
  const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main,
  },
  }));
  
  const imagemaker = require('../../../images/3.jpeg');
  const course = require('../../../images/4.jpeg');
  const partners = require('../../../images/partners.jpeg');
  const contacts = require('../../../images/contacts.jpg');
  
  export const Main = ({ 
    springProps: {xys},
    // setSpring, 
    // ...props
  }) => {
  
  const item3 = interpolate([xys], (xys) => `translateX(${xys[1] * 0.2}px) translateY(${xys[0] * 0.05}px)`);
  
  const classes = useStyles({});
  
  return (
    <>
      <Hidden xsDown>
        <div
          style={{
            position: 'relative',
          }}>
          <Grid 
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={8}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={3}>
                  <div style={{
                    width: '100%',
                    height: 315,
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <Link href={'/imagemaker'}>
                      <a>
                        <img src={imagemaker} alt="имиджмейкер" />
                      </a>
                    </Link>
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div style={{
                    width: '100%',
                    height: 315,
                    // position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img src={course} alt="дизайн интерьеров" style={{
                    // width: '100%'
                  }} />
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div style={{
                    width: '100%',
                    height: 315,
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img src={partners} alt="партнерство с сфере обучения" style={{
                      transform: 'translateY(-85px)'
                    }} />
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div style={{
                    width: '100%',
                    height: 315,
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img src={contacts} alt="контакты школы" style={{
                    // width: '100%'
                    }} />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>


          <Grid 
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{
              position: 'absolute',
              top: 0
            }}
          >
            <Grid item xs={10}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={3}>
                  <div style={{
                    width: '100%',
                    height: 315,
                    position: 'absolute',
                    top: -36,
                    left: 0,
                  }}>
                    <a.div style={{
                      position: 'absolute',
                      top: 0,
                      left: '12%',
                      width: 310,
                      transform: item3,
                    }}>
                      <Typography variant='h4' component='h1'>
                        Имиджмейкер. Второе высшее
                      </Typography>
                    </a.div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div style={{
                    width: '100%',
                    height: 315,
                    position: 'absolute',
                    top: 268,
                    left: 0,
                    overflow: 'hidden'
                  }}>
                  <div style={{
                      position: 'absolute',
                      top: 0,
                      left: '32%',
                      width: 310
                    }}>
                      <Typography variant='h4' component='h1'>
                        Дизайн интерьеров
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div style={{
                    width: '100%',
                    height: 315,
                    position: 'absolute',
                    top: -36,
                    left: 0,
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: '52%',
                      width: 310
                    }}>
                      <Typography variant='h4' component='h1'>
                        Наше партнерство
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div style={{
                    width: '100%',
                    height: 315,
                    position: 'absolute',
                    top: 268,
                    left: 0,
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: '72%',
                      width: 310
                    }}>
                      <Typography variant='h4' component='h1'>
                        Связь с нами
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Hidden>
    </>
  );
};
  