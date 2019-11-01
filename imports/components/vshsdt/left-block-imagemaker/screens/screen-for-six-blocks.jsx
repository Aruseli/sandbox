import {
  Typography, ListItem, ListItemText, Grid, List, makeStyles,
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
  const freeLearning = require('../../../../../images/comp.svg');
  const offline = require('../../../../../images/school.svg');
  const online = require('../../../../../images/online.svg');
  
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
    </>,
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
  
export const MobileFreeFourScreen = ({marginLeft}) => {
  const classes = useStyle();
  const { spx, sh } = useContext(SpringContext);
  
  const scrRef1 = useRef();
  const scrRef2 = useRef();
  const scrRef3 = useRef();
  const scrRef4 = useRef();
  const scrRef5 = useRef();
  const scrRef6 = useRef();
  
  const getTop = (ref) => ref.current ? ref.current.offsetTop + (ref.current.offsetHeight / 2) : 0;
  
  const scrItem1 = interpolate([spx, sh], (spx, sh) => `translateY(${-(((spx) - getTop(scrRef1)) * 0.1) + 0}px)`);
  const scrItem2 = interpolate([spx, sh], (spx, sh) => `translateY(${-(((spx) - getTop(scrRef2)) * 0.1) + 0}px)`);
  const scrItem3 = interpolate([spx, sh], (spx, sh) => `translateY(${-(((spx) - getTop(scrRef3)) * 0.1) + 0}px)`);
  const scrItem4 = interpolate([spx, sh], (spx, sh) => `translateY(${-(((spx) - getTop(scrRef4)) * 0.1) + 0}px)`);
  const scrItem5 = interpolate([spx, sh], (spx, sh) => `translateY(${-(((spx) - getTop(scrRef5)) * 0.1) + 0}px)`);
  const scrItem6 = interpolate([spx, sh], (spx, sh) => `translateY(${-(((spx) - getTop(scrRef6)) * 0.1) + 0}px)`);
  
  return (<>
      <Grid
        container
        display='column'
        justify="center"
        alignItems="center" 
        spacing={8}
        >
        <Grid item xs={10} sm={5} sm={5}
          style={{
          position: 'relative', 
          }} 
          ref={scrRef1} 
        >
          <a.div
            style={{
              transform: scrItem1,
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
        <Grid item xs={10} sm={5}
          style={{
          position: 'relative', 
          }} 
          ref={scrRef2} 
        >
          <a.div
            style={{
              transform: scrItem2,
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
        <Grid item xs={10} sm={5}
          style={{
          position: 'relative', 
          }} 
          ref={scrRef3} 
        >
          <a.div
            style={{
              transform: scrItem3,
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
        <Grid item xs={10} sm={5}
          style={{
            position: 'relative', 
          }} 
          ref={scrRef4} 
        >
          <a.div
            style={{
              transform: scrItem4,
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
            {content[3]}
          </a.div>
        </Grid>
        <Grid item xs={10} sm={5}
          style={{
            position: 'relative', 
          }} 
          ref={scrRef5} 
        >
          <a.div
            style={{
              transform: scrItem5,
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
            {content[4]}
          </a.div>
        </Grid>
        <Grid item xs={10} sm={5}
          style={{
            position: 'relative', 
          }} 
          ref={scrRef6} 
        >
          <a.div
            style={{
              transform: scrItem6,
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
            {content[5]}
          </a.div>
        </Grid>
      </Grid>
  </>);
}
  