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
  
  
  export const LeftBlocks = ({}) => {
    return (
      <div style={{
          position: 'relative',
          width: '100%',
          height: '100%'
      }}>
        <div style={{
            position: 'absolute',
            left: 'calc(50% - 25%)',
            top: 'calc(90% - 17.5%)',
            backgroundColor: 'red',
            width: '50%',
            height: '35%',
            overflow: 'hidden'
        }}>
          <div style={{
            width: '100%'
          }}>
            <img src='https://ege-merlin.ru/uploads/blog/2017_October/P3.jpg' alt='Длительность обучения' style={{
              width: '100%'
            }} />
          </div>
        </div>
        <div style={{
            position: 'absolute',
            left: 'calc(35% - 20%)',
            top: 'calc(85% - 20%)',
            backgroundColor: 'green',
            width: '40%',
            height: '40%'
        }}>
          picture
        </div>
        <div style={{
            position: 'absolute',
            left: 'calc(12% - 75px)',
            top: 'calc(2% - 30px)',
            backgroundColor: 'lightblue',
            width: 150,
            height: 60
        }}>
          <Grid
            container
            justify='center'
            alignItems='center'
            style={{
              height: '100%'
            }}
          >
            <Grid item>
              <Typography component='h1' variant='h6' align="center">11 месяцев</Typography>
            </Grid>
          </Grid>
        </div>
        <div style={{
            position: 'absolute',
            left: 'calc(65% - 200px)',
            top: 'calc(16% - 150px)',
            backgroundColor: 'transparent',
            width: 400,
            height: 300
        }}>
          <Grid
            container
            justify='center'
            alignItems='center'
            style={{
              height: '100%'
            }}
          >
            <Grid item>
              <List style={{textALign: 'right'}}>
                <ListItem>
                  <ListItemText primary='Дистанционное обучение от 15 тыс.руб. в месяц' />
                </ListItem>
                <ListItem>
                  <ListItemText primary='Заочное обучение от 18 тыс.руб. в месяц' />
                </ListItem>
                <ListItem>
                  <ListItemText primary='Очное обучение от 20 тыс.руб. в месяц' />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </div>
        <div style={{
            position: 'absolute',
            left: 'calc(15% - 100px)',
            top: 'calc(26% - 60px)',
            backgroundColor: 'lightblue',
            width: 200,
            height: 120
        }}>
          <Grid
            container
            justify='center'
            alignItems='center'
            style={{
              height: '100%'
            }}
          >
            <Grid item>
              <Typography component='h1' variant='h6'>очно</Typography>
              <Typography component='h1' variant='h6'>заочно</Typography>
              <Typography component='h1' variant='h6'>дистанционно</Typography>
            </Grid>
          </Grid>
        </div>
        <div style={{
            position: 'absolute',
            left: 'calc(27% - 175px)',
            top: 'calc(46% - 70px)',
            backgroundColor: 'lightblue',
            width: 350,
            height: 140
        }}>
          <Grid
            container
            justify='center'
            alignItems='center'
            style={{
              height: '100%'
            }}
          >
            <Grid item>
              <Typography component='h1' variant='h6' align="center">Академическое образование + реальная практика</Typography>
              <Typography component='h1' variant='caption' align="center">Лицензия на дополнительное профессиональное образование № 039759</Typography>
            </Grid>
          </Grid>
        </div>
        <div style={{
            position: 'absolute',
            left: 'calc(13% - 80px)',
            top: 'calc(12% - 30px)',
            backgroundColor: 'lightblue',
            width: 160,
            height: 60
        }}>
          <Grid
            container
            justify='center'
            alignItems='center'
            style={{
              height: '100%'
            }}
          >
            <Grid item>
              <Typography component='h1' variant='h6' align="center">120 занятий</Typography>
            </Grid>
          </Grid>
        </div>
        <div style={{
            position: 'absolute',
            left: 'calc(65% - 100px)',
            top: 'calc(70% - 100px)',
            backgroundColor: 'gray',
            width: 200,
            height: 200
        }}>
          text
        </div>
      </div>
    );
  }
    