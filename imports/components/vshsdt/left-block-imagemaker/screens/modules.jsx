import React, {useContext, useRef} from 'react';

import { interpolate } from 'react-spring';

import {Typography, Grid} from '@material-ui/core';

import { SpringContext } from '../../../../../pages/imagemaker';

import {VisibilitySensorSpring, delay} from '../../visibility-sensor-spring';

const content = [
  <>
    <Typography component='h2' variant='h6' align="center">ОСНОВЫ ИМИДЖМЕЙКИНГА</Typography>
    <Typography component='h2' variant='h6' align='center'>STYLE BASIC</Typography>
    <Typography component='h2' variant='h6' align='center'>Уровень 1</Typography>
    <Typography component='h2' variant='body2' align='center'>(120 ак.часов)</Typography>
    <Typography component='p' varaint='body1'>
      Все для правильного старта карьеры и творчества в индустрии
    </Typography>
    <Typography component='p' variant='body2' align="left" style={{
      margin: '0 20px'
      }}>
      <span style={{fontWeight: 800}}>В процессе обучения:</span> 
      система подбора одежды, аксессуаров, образа от колористики до стилей 
      и гардероба. Актуальные правила покупки стильных и модных вещей
    </Typography>
  </>,
  <>
    <Typography component='h2' variant='h6' align="center">ИМИДЖ-КОНСАЛТИНГ</Typography>
    <Typography component='h2' variant='h6' align='center'>PERSONAL STYLING</Typography>
    <Typography component='h2' variant='h6' align='center'>Уровень 2</Typography>
    <Typography component='h2' variant='body2' align='center'>(120 ак.часов)</Typography>
    <Typography component='p' varaint='body1'>
      <span style={{fontWeight: 800}}>Специализация:</span> имидж-стилист, 
      имидж-консультант, шопер
    </Typography>
    <Typography component='p' variant='body2' align="left" style={{
      margin: '0 20px'
      }}>
      <span style={{fontWeight: 800}}>В процессе обучения:</span> 
      алгоритмы и инструменты консультирования клиентов по моде и стилю, 
      шопинг сопровождение. Мужская и женская стилистика
    </Typography>
  </>,
  <>
    <Typography component='h2' variant='h6' align="center">ЛИЧНЫЙ БРЕНД</Typography>
    <Typography component='h2' variant='h6' align='center'>PERSONAL BRANDING</Typography>
    <Typography component='h2' variant='h6' align='center'>Уровень 4</Typography>
    <Typography component='h2' variant='body2' align='center'>(60 ак.часов)</Typography>
    <Typography component='p' varaint='body1'>
      <span style={{fontWeight: 800}}>Специализация:</span> 
      cоздание стиля и личного бренда выпускника
    </Typography>
    <Typography component='p' variant='body2' align="left" style={{
      margin: '0 20px'
      }}>
      <span style={{fontWeight: 800}}>В финале обучения:</span> 
      подготовка к защите дипломной работы, формирование портфолио, 
      стиля и стратегии профессионального продвижения
    </Typography>
  </>,
  <>
    <Typography component='h2' variant='h6' align="center">СТИЛИСТИКА МОДЫ</Typography>
    <Typography component='h2' variant='h6' align='center'>FASHION STYLING</Typography>
    <Typography component='h2' variant='h6' align='center'>Уровень 3</Typography>
    <Typography component='h2' variant='body2' align='center'>(180 ак.часов)</Typography>
    <Typography component='p' varaint='body1'>
      <span style={{fontWeight: 800}}>Специализация:</span> 
      стилист фотосессий, стилист модных проектов
    </Typography>
    <Typography component='p' variant='body2' align="left" style={{
      margin: '0 20px'
      }}>
      <span style={{fontWeight: 800}}>В процессе обучения:</span> 
      стилизация событий в индустрии моды (фотосессии, показы, ТВ), 
      проекты для fashion retail. Развитие креативности
    </Typography>
  </>
]

export const Modules = ({}) => {
  const { spx } = useContext(SpringContext);

  const scrRef = useRef();
  
  const getTop = (ref) => ref.current ? ref.current.offsetTop : 0;

  const scrItem = interpolate([spx], (spx) => `translateY(${-((spx - getTop(scrRef)) * 0.2) + 0}px)`);

  return <div 
    ref={scrRef}
    style={{
      position: 'relative',
      width: '100%',
      // height: '70vh',
    }}>
      <Grid
        container
        justify='center'
        alignItems='center'
      >
        <Grid item>
          <Grid
            container
            justify='center'
            alignItems='flex-end'
          >
            <Grid item xs={12} sm={5} md={5} lg={5} style={{
              position: 'relative', 
              padding: 20
            }}>
              <VisibilitySensorSpring
                backgroundOut={() => ({ 
                  transformOrigin: 'bottom', 
                  transform: 'scaleY(0)' 
                })}
                backgroundIn={() => ({ 
                  transformOrigin: 'bottom',  
                  transform: 'scaleY(1)' 
                })}
                textIn={() => ({ position: 'relative', width: 'initial', height: 'initial' })}
                textOut={() => ({ position: 'relative', width: 'initial', height: 'initial' })}
                backgroundColor='rgb(245, 182, 204)'
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
              >
                {content[0]}
              </VisibilitySensorSpring>
            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={5} style={{
              position: 'relative', 
              padding: 20
            }}>
              <VisibilitySensorSpring
                backgroundOut={() => ({ 
                  transformOrigin: 'left', 
                  transform: 'scaleX(0)' 
                })}
                backgroundIn={() => ({ 
                  transformOrigin: 'left',  
                  transform: 'scaleX(1)' 
                })}
                textIn={() => ({ position: 'relative', width: 'initial', height: 'initial' })}
                textOut={() => ({ position: 'relative', width: 'initial', height: 'initial' })}
                backgroundColor='rgb(204, 177, 186)'
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
              >
                {content[1]}
              </VisibilitySensorSpring>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            justify='center'
            alignItems='flex-start'
          >
            <Grid item xs={12} sm={5} md={5} lg={5} style={{
              position: 'relative', 
              padding: 20
            }}>
              <VisibilitySensorSpring
                backgroundOut={() => ({ 
                  transformOrigin: 'right', 
                  transform: 'scaleX(0)' 
                })}
                backgroundIn={() => ({ 
                  transformOrigin: 'right',  
                  transform: 'scaleX(1)' 
                })}
                textIn={() => ({ position: 'relative', width: 'initial', height: 'initial' })}
                textOut={() => ({ position: 'relative', width: 'initial', height: 'initial' })}
                backgroundColor='rgb(245, 182, 204)'
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
              >
                {content[2]}
              </VisibilitySensorSpring>
            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={5} style={{
              position: 'relative', 
              padding: 20
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
                backgroundColor='rgb(204, 177, 186)'
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
              >
                {content[3]}
              </VisibilitySensorSpring>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
}