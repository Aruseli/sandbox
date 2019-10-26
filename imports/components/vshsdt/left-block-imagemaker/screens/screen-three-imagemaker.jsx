import {
  Typography, ListItem, ListItemText, Grid, List
} from '@material-ui/core';

import React from 'react';

import {VisibilitySensorSpring, delay} from '../../visibility-sensor-spring';

export const ScreenThree = ({marginLeft}) => {
  
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
                <List>
                  <Typography component='h2' variant="h6" align='center'>
                    Полная программа
                  </Typography>
                  <ListItem>
                    <ListItemText primary='Полная программа обучения — 11 месяцев' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='120 занятий + самостоятельная работа' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Обязательное выполнение д/з и практики' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Диплом РГСУ / ВШСДТ' />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <Typography component='h2' variant="h6" align='center'>
                    Специализация
                  </Typography>
                  <ListItem>
                    <ListItemText primary='Программа обучения — 6 месяцев' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='60 занятий + самостоятельная работа' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Обязательное выполнение д/з и практики' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Диплом ВШСДТ' />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <Typography component='h2' variant="h6" align='center'>
                    Базовый
                  </Typography>
                  <ListItem>
                    <ListItemText primary='Программа обучения — 3 месяца' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='30 занятий + самостоятельная работа' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Обязательное выполнение д/з и практики' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Сертификат' />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </VisibilitySensorSpring>
    </div> 
  </>);
}
  