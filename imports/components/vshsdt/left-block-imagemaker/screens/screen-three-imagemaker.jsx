import {
  Typography, ListItem, ListItemText, Grid, List, Hidden, makeStyles,
} from '@material-ui/core';

import React, { useRef, useContext } from 'react';
import { animated as a, interpolate } from 'react-spring';

import { SpringContext } from '../../../../../pages/imagemaker';

import {VisibilitySensorSpring, delay} from '../../visibility-sensor-spring';

const useStyle = makeStyles(() => ({
  screen: {
    marginTop: 50,
    marginBottom: 150,
    position: 'relative',
    width: '100%',
    height: '70vh',
  },
  paddings: {
    paddingTop: 0,
    paddingBottom: 0
  }
}));

const fullProgramm = require('../../../../../images/student.svg');
const specialization = require('../../../../../images/hat.svg');
const basic = require('../../../../../images/basic.svg');

const content = [
  <>
    <List disablePadding>
      <Typography component='h2' variant="h6" align='center'>
        Полная программа
      </Typography>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary='Полная программа обучения — 11 месяцев' />
      </ListItem>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary='120 занятий + самостоятельная работа' />
      </ListItem>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary='Обязательное выполнение д/з и практики' />
      </ListItem>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary={<b>Диплом РГСУ / ВШСДТ</b>} />
      </ListItem>
    </List>
  </>,
  <>
    <List>
      <Typography component='h2' variant="h6" align='center'>
        Специализация
      </Typography>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary='Программа обучения — 6 месяцев' />
      </ListItem>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary='60 занятий + самостоятельная работа' />
      </ListItem>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary='Обязательное выполнение д/з и практики' />
      </ListItem>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary={<b>Диплом ВШСДТ</b>} />
      </ListItem>
    </List>
  </>,
  <>
    <List>
      <Typography component='h2' variant="h6" align='center'>
        Базовый
      </Typography>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary='Программа обучения — 3 месяца' />
      </ListItem>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary='30 занятий + самостоятельная работа' />
      </ListItem>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary='Обязательное выполнение д/з и практики' />
      </ListItem>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary={<b>Сертификат</b>} />
      </ListItem>
    </List>
  </>
]

export const ScreenThree = ({marginLeft}) => {
  const classes = useStyle();
  const { spx, sh } = useContext(SpringContext);

  const scr2Ref = useRef();

  const getTop = (ref) => ref.current ? ref.current.offsetTop + (ref.current.offsetHeight / 2) : 0;

  const scr2item2 = interpolate([spx, sh], (spx, sh) => `translateY(${-(((spx) - getTop(scr2Ref)) * 0.1) + 0}px)`);
  
  return (<>
      <div style={{
        position: 'relative',
        marginTop: 50,
        marginLeft: marginLeft
      }}>
      
        <VisibilitySensorSpring
          backgroundOut={() => ({ 
            transformOrigin: 'top',
            transform: 'scaleY(0)' 
          })}
          backgroundIn={() => ({ 
            transformOrigin: 'top',
            transform: 'scaleY(1)' 
          })}
          textIn={() => ({ position: 'relative', width: 'initial', height: 'initial' })}
          textOut={() => ({ position: 'relative', width: 'initial', height: 'initial' })}
          backgroundColor='RGBA(255, 182, 77, 0.5)'
          visibilitySensorProps={{
            offset: { top: -100, bottom: -100 }
          }}
          onVisibiltySensor={async ({
            isVisible, setBackgroundStyle,
            backgroundOut, backgroundIn,
          }) => {
            if (isVisible) await delay(100); 
            setBackgroundStyle(isVisible ? backgroundIn() : backgroundOut() );
          }}
          height='60%'
        >
          <Grid
            container
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Grid
                container
                justify="flex-start"
                alignItems="flex-start"
                spacing={5}
              > 
                <Grid item xs={4}>
                  {content[0]}
                </Grid>
                <Grid item xs={4}>
                  {content[1]}
                </Grid>
                <Grid item xs={4}>
                  {content[2]}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </VisibilitySensorSpring>
      </div> 
    {/* <Hidden smUp implementation='css'>
        <Grid
          ref={scr2Ref} 
          container
          display='column'
          justify="center"
          alignItems="center" 
          spacing={8}
        >
          <Grid item xs={10}
            style={{
              position: 'relative', 
            }} 
          >
            <a.div
              style={{
                transform: scr2item2,
                backgroundColor: 'rgb(239, 195, 195)',
                boxSizing: 'border-box',
                padding: 20,
              }}
            >
            <Grid
              container
              justify="center"
              alignItems="center"
            >
              <Grid item xs={4}>
                <img src={fullProgramm} style={{
                  width: '100%'
                }} />
              </Grid>
            </Grid>  
              {content[0]}
            </a.div>
          </Grid>
          <Grid item xs={10}
            style={{
              position: 'relative', 
            }} 
          >
            <a.div
              style={{
                transform: scr2item2,
                backgroundColor: 'rgb(239, 195, 195)',
                boxSizing: 'border-box',
                padding: 20,
              }}
            >
              <Grid
                container
                justify="center"
                alignItems="center"
              >
                <Grid item xs={4}>
                  <img src={specialization} style={{
                    width: '100%'
                  }} />
                </Grid>
              </Grid> 
              {content[1]}
            </a.div>
          </Grid>
          <Grid item xs={10}
            style={{
              position: 'relative', 
            }} 
          >
            <a.div
              style={{
                transform: scr2item2,
                backgroundColor: 'rgb(239, 195, 195)',
                boxSizing: 'border-box',
                padding: 20,
              }}
            >
              <Grid
                container
                justify="center"
                alignItems="center"
              >
                <Grid item xs={4}>
                  <img src={basic} style={{
                    width: '100%'
                  }} />
                </Grid>
              </Grid>
              {content[2]}
            </a.div>
          </Grid>
        </Grid>
    </Hidden> */}
  </>);
}
  