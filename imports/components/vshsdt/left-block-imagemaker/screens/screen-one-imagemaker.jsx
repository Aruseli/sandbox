import {
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import React, { useRef, useContext, useState } from 'react';

import { interpolate } from 'react-spring';

import {Picture} from '../picture';
import {Text} from '../text';
import { SpringContext } from '../../../../../pages/imagemaker';

import {VisibilitySensorSpring, delay} from '../../visibility-sensor-spring';

const useStyle = makeStyles(() => ({
  screen: {
  position: 'relative',
  width: '100%',
  height: '70vh',
  },
}));

const Girl = require('../../../../../images/3.jpeg?resize&size=300');

export const ScreenOne = ({}) => {
  const classes = useStyle();
  const { spx } = useContext(SpringContext);

  // надо такие добавлять на каждый скрин-див в котором хочется применять interpolate
  const scr1Ref = useRef();
  
  const getTop = (ref) => ref.current ? ref.current.offsetTop : 0;

  const scr1item1 = interpolate([spx], (spx) => `translateY(${-((spx - getTop(scr1Ref)) * 0.2) + 0}px)`);
  const scr1item2 = interpolate([spx], (spx) => `translateY(${-((spx - getTop(scr1Ref)) * 0.3) + 0}px)`);
  const scr1item3 = interpolate([spx], (spx) => `translateY(${-((spx - getTop(scr1Ref)) * 0.5) + 0}px)`);
  
  return (<>
    <div ref={scr1Ref} className={classes.screen}>
      <Picture 
        left='70%' top='65%'
        width='55%' height='60%'
        src='https://ege-merlin.ru/uploads/blog/2017_October/P3.jpg'
        alt='Длительность обучения'
        style={{transform: scr1item1}}
        />
      <Picture 
        left='32%' top='30%'
        width='55%' height='45%'
        src={Girl}
        alt='Длительность обучения'
        style={{transform: scr1item2}}
      />
      <Text 
        left='55%' top='30%'
        width='390px' height='80px'
        WrapComponent={VisibilitySensorSpring}
        wrapComponentProps={{
          textOut: () => ({ transform: 'translateX(300px)', opacity: 0 }),
          textIn: () => ({ transform: 'translateX(0px)', opacity: 1 }),
          backgroundOut: () => ({ transform: 'translateX(300px)', opacity: 0 }),
          backgroundIn: () => ({ transform: 'translateX(0px)', opacity: 1 }),
          backgroundColor: '#fffeec'
        }}
        style={{
          transform: scr1item3,
          // boxShadow: '0 5px 15px rgba(0, 0, 0, .1)',
        }}
      >
      <Typography component='h2' variant='h6' align="center">11 месяцев / 120 занятий / Диплом</Typography>
      </Text>
      <Text 
        left='40%' top='65%'
        width='390px' height='150px'
        WrapComponent={VisibilitySensorSpring}
        wrapComponentProps={{
          textOut: () => ({ transform: 'translateX(-300px)', opacity: 0 }),
          textIn: () => ({ transform: 'translateX(0px)', opacity: 1 }),
          backgroundOut: () => ({ transform: 'translateX(-300px)', opacity: 0 }),
          backgroundIn: () => ({ transform: 'translateX(0px)', opacity: 1 }),
          backgroundColor: '#fff7af'
        }}
        style={{
          transform: scr1item3,
          // boxShadow: '0 5px 15px rgba(0, 0, 0, .1)'
        }}
      >
        <Typography component='p' variant='body1' align="center">Обучение по программе
          «Имидж‑консалтинг и fashion‑styling».
          Идеальный старт в индустрии моды
        </Typography>
        <Typography component='p' variant='body2' align="center">очно / заочно / дистанционно</Typography>
      </Text>
    </div>
  </>);
}
  