import {
  Typography, ListItem, ListItemText, Grid, List, Hidden
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import React, { useRef, useContext, useState } from 'react';

import { animated as a, interpolate } from 'react-spring';

import { SpringContext } from '../../../../../pages/imagemaker';

import {VisibilitySensorSpring, delay} from '../../visibility-sensor-spring';

const useStyle = makeStyles(() => ({
  screen: {
  position: 'relative',
  width: '100%',
  height: '70vh',
  },
}));

const freeLearning = require('../../../../../images/comp.svg');
const offline = require('../../../../../images/school.svg');
const online = require('../../../../../images/online.svg');

const content=[
  <>
    <List disablePadding>
      <Typography component='h2' variant="h6" align='center'>
      Вольный слушатель
      </Typography>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary='Доступно только в дистанционном обучении' />
      </ListItem>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary='Доступ к обучению сразу после оплаты' />
      </ListItem>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary='Возможность выбирать отдельно интересующие модули' />
      </ListItem>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary={<b>Без требований по выполнению д/з</b>} />
      </ListItem>
    </List>
  </>,
  <>
    <List disablePadding>
      <Typography component='h2' variant="h6" align='center'>
      Очное обучение
      </Typography>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary='Доступно: Москва, Новосибирск, Бишкек' />
      </ListItem>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary='Дневные и вечерние группы' />
      </ListItem>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary='Практика в ТЦ, консультации, фото' />
      </ListItem>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary={<b>Учебу курирует наставник</b>} />
      </ListItem>
    </List>
  </>,
  <>
    <List disablePadding>
      <Typography component='h2' variant="h6" align='center'>
      Дистант или заочно
      </Typography>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary='Доступно при подключении к интернет, учим на русском языке в любой точке мира' />
      </ListItem>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary='Гибкий график обучения, обязательно соблюдение сроков сдачи практических работ' />
      </ListItem>
      <ListItem style={{
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <ListItemText primary={<b>В заочной форме обучения доступны 2 очные сессии</b>} />
      </ListItem>
    </List>
  </>
]

export const ScreenFour = ({marginLeft}) => {
  const classes = useStyle();
  const { spx, sh } = useContext(SpringContext);
  const [toggler, setToggler] = useState(false);

  // надо такие добавлять на каждый скрин-див в котором хочется применять interpolate
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
        backgroundColor='RGBA(205, 122, 0, 0.5)'
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
                <img src={freeLearning} style={{
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
                  <img src={offline} style={{
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
                  <img src={online} style={{
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
  