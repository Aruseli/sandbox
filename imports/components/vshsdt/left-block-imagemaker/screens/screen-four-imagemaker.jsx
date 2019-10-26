import {
  Typography, ListItem, ListItemText, Grid, List
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import React, { useRef, useContext, useState } from 'react';

import { interpolate } from 'react-spring';

import { SpringContext } from '../../../../../pages/imagemaker';

import {VisibilitySensorSpring, delay} from '../../visibility-sensor-spring';

const useStyle = makeStyles(() => ({
  screen: {
  position: 'relative',
  width: '100%',
  height: '70vh',
  },
}));

export const ScreenFour = ({marginLeft}) => {
  const classes = useStyle();
  const { spx } = useContext(SpringContext);
  const [toggler, setToggler] = useState(false);

  // надо такие добавлять на каждый скрин-див в котором хочется применять interpolate
  const scr2Ref = useRef();

  const getTop = (ref) => ref.current ? ref.current.offsetTop : 0;
  
  const scr2item1 = interpolate([spx], (spx) => `translateY(${-((spx - getTop(scr2Ref)) * 0.2) + 0}px)`);
  const scr2item2 = interpolate([spx], (spx) => `translateY(${-((spx - getTop(scr2Ref)) * 0.5) + 0}px)`);
  const scr2item3 = interpolate([spx], (spx) => `translateY(${-((spx - getTop(scr2Ref)) * 0.5) + 0}px)`);

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
                <List>
                  <Typography component='h2' variant="h6" align='center'>
                  Вольный слушатель
                  </Typography>
                  <ListItem>
                  <ListItemText primary='Доступно только в дистанционном обучении' />
                  </ListItem>
                  <ListItem>
                  <ListItemText primary='Доступ к обучению сразу после оплаты' />
                  </ListItem>
                  <ListItem>
                  <ListItemText primary='Возможность выбирать отдельно интересующие модули' />
                  </ListItem>
                  <ListItem>
                  <ListItemText primary='Без требований по выполнению д/з' />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <Typography component='h2' variant="h6" align='center'>
                  Очное обучение
                  </Typography>
                  <ListItem>
                  <ListItemText primary='Доступно: Москва, Новосибирск, Бишкек' />
                  </ListItem>
                  <ListItem>
                  <ListItemText primary='Дневные и вечерние группы' />
                  </ListItem>
                  <ListItem>
                  <ListItemText primary='Практика в ТЦ, консультации, фото' />
                  </ListItem>
                  <ListItem>
                  <ListItemText primary='Учебу курирует наставник' />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <Typography component='h2' variant="h6" align='center'>
                  Дистант или заочно
                  </Typography>
                  <ListItem>
                  <ListItemText primary='Доступно при подключении к интернет, учим на русском языке в любой точке мира' />
                  </ListItem>
                  <ListItem>
                  <ListItemText primary='Гибкий график обучения, обязательно соблюдение сроков сдачи практических работ' />
                  </ListItem>
                  <ListItem>
                  <ListItemText primary='В заочной форме обучения доступны 2 очные сессии' />
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
  