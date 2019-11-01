import {
  Typography, ListItem, ListItemText, Grid, List, ListSubheader
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

export const ScreenFive = ({}) => {
  const classes = useStyle();
  const { spx, sh } = useContext(SpringContext);

  const scr2Ref = useRef();

  const getTop = (ref) => ref.current ? ref.current.offsetTop + (ref.current.offsetHeight / 2) : 0;
  
  const scr2item1 = interpolate([spx, sh], (spx, sh) => `translateY(${-(((spx) - getTop(scr2Ref)) * 0.2) + 0}px)`);
  const scr2item2 = interpolate([spx, sh], (spx, sh) => `translateY(${-(((spx) - getTop(scr2Ref)) * 0.5) + 0}px)`);
  const scr2item3 = interpolate([spx, sh], (spx, sh) => `translateY(${-(((spx) - getTop(scr2Ref)) * 0.5) + 0}px)`);

  return (<>
    <div style={{
      marginTop: 50
    }}>
      <Grid
        container
        justify='center'
        alignItems='center'
        >
        <Grid item xs={10} style={{
          position: 'relative', 
          padding: 20
        }}>
          <VisibilitySensorSpring
            backgroundOut={() => ({ 
              transformOrigin: 'bottom', 
              transform: 'scaleY(0)',
              zIndex: -1, 
            })}
            backgroundIn={() => ({ 
              transformOrigin: 'bottom',  
              transform: 'scaleY(1)',
              zIndex: -1, 
            })}
            textIn={() => ({ 
              position: 'relative', 
              width: 'initial', 
              height: 'initial',
              padding: 20
            })}
            textOut={() => ({ 
              position: 'relative', 
              width: 'initial', 
              height: 'initial',
              padding: 20
            })}
            backgroundColor='#ffbba6'
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
            bgInText
          >
            <>
              <Typography component='h2' variant='h6' style={{
                position: 'absolute',
                top: -17,
                left: -7
              }}>Для кого</Typography>
              <Typography component='p' variant='body2' align="left" style={{
                margin: '0 20px'
                }}>
                Курс ориентирован на тех, кто интересуется современной fashion-индустрией, 
                кто хочет получить новую творческую профессию для будущей карьеры, а так 
                же тех, кто уже работает в модной индустрии (фотографов, парикмахеров, дизайнеров), 
                но хочет развития и профессионального роста.
              </Typography>
            </>
          </VisibilitySensorSpring>
        </Grid>
        <Grid item xs={12} style={{
          position: 'relative',
        }}>
          <Grid
            container
            justify='center'
            alignItems='flex-start'
          >
            <Grid item xs={10} sm={5} md={5} lg={5} style={{ position: 'relative', padding: 20 }}>
              <VisibilitySensorSpring
                backgroundOut={() => ({ 
                  transformOrigin: 'right',  
                  transform: 'scaleX(0)' 
                })}
                backgroundIn={() => ({ 
                  transformOrigin: 'right',
                  transform: 'scaleX(1)' 
                })}
                textIn={() => ({ 
                  position: 'relative', 
                  width: 'initial', 
                  height: 'initial',
                  padding: 20
                })}
                textOut={() => ({ 
                  position: 'relative', 
                  width: 'initial', 
                  height: 'initial',
                  padding: 20
                })}
                backgroundColor='#ffccbc'
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
                bgInText
              >
                <>
                  <Typography component='h2' variant='h6' style={{
                    position: 'absolute',
                    top: -17,
                    left: -7
                  }}>Возможности</Typography>
                  <List dense>
                    <ListItem dense>
                      <ListItemText primary='Имидж-консультирование клиентов, шопинг в России и Европе' />
                    </ListItem>
                    <ListItem dense>
                      <ListItemText primary='Стилизация фотосъемок (реклама, глянец), участие в ТВ проектах' />
                    </ListItem>
                    <ListItem dense>
                      <ListItemText primary='Коллаборации с дизайнерами (стилизация коллекций)' />
                    </ListItem>
                    <ListItem dense>
                      <ListItemText primary='Сотрудничество с бутиками и сетевыми магазинами' />
                    </ListItem>
                    <ListItem dense>
                      <ListItemText primary='Личный бренд, блог, networkihg и продвижение' />
                    </ListItem>
                    <ListItem dense>
                      <ListItemText primary='Свой бизнес в индустрии моды' />
                    </ListItem>
                  </List>
                </>
              </VisibilitySensorSpring>
            </Grid>
            <Grid item xs={10} sm={5} md={5} lg={5} style={{ position: 'relative', padding: 20 }}>
              <VisibilitySensorSpring
                backgroundOut={() => ({ 
                  transformOrigin: 'left',
                  transform: 'scaleX(0)' 
                })}
                backgroundIn={() => ({ 
                  transformOrigin: 'left',
                  transform: 'scaleX(1)' 
                })}
                textIn={() => ({ 
                  position: 'relative', 
                  width: 'initial', 
                  height: 'initial',
                  padding: 20
                })}
                textOut={() => ({ 
                  position: 'relative', 
                  width: 'initial', 
                  height: 'initial',
                  padding: 20
                })}
                backgroundColor='#ffab90'
                visibilitySensorProps={{
                  offset: { top: -100, bottom: -100 }
                }}
                onVisibiltySensor={async ({
                  isVisible,
                  setBackgroundStyle,
                  backgroundOut, backgroundIn,
                }) => {
                  if (isVisible) await delay(100); 
                  setBackgroundStyle(isVisible ? backgroundIn() : backgroundOut() );
                }}
                bgInText
              >
                <>
                  <Typography component='h2' variant='h6' style={{
                    position: 'absolute',
                    top: -17,
                    left: -7
                  }}>В процессе обучения вас ждут</Typography>
                  <List dense>
                    <ListItem>
                      <ListItemText primary='Мастер-классы с приглашенными экспертами' />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary='Посещение показов и недель моды' />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary='Участие в модных проектах' />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary='Общение и знакомство с будущими партнерами и единомышленниками' />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary='Постоянная стильная атмосфера' />
                    </ListItem>
                  </List>
                </>
              </VisibilitySensorSpring>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  </>);
}
  