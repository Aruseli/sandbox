import {
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import React, { useRef, useContext, useState } from 'react';

import { interpolate } from 'react-spring';

import FsLightbox from 'fslightbox-react';

import {Picture} from '../picture';
import {Text} from '../text';
import { SpringContext } from '../../../../../pages/imagemaker';

import {VisibilitySensorSpring, delay} from '../../visibility-sensor-spring';

const Diploma = require('../../../../../images/diplom.jpg?resize&size=300');
const DiplomaFull = require('../../../../../images/diplom.jpg');
const rgsu = require('../../../../../images/rgsu.png?resize&size=300');
const DiplomaVshsdtFull = require('../../../../../images/diplom-vshsdt.jpg');

const useStyle = makeStyles(() => ({
  screen: {
    marginTop: 50,
    marginBottom: 150,
    position: 'relative',
    width: '100%',
    height: '70vh',
  },
}));

export const ScreenTwo = ({}) => {
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
    <div ref={scr2Ref} className={classes.screen}>
      <Picture 
        fill={false}
        left='35%' top='30%'
        width='55%' height='70%'
        src={Diploma}
        alt='Диплом'
        style={{transform: scr2item1}}
        onClick={() => setToggler(!toggler)}
        wrapComponentProps={{
        }}
      />
      <FsLightbox 
        toggler={ toggler }
        sources={ [
          DiplomaFull,
          DiplomaVshsdtFull
        ] }
      />
      <Text 
        left='60%' top='12%'
        width='250px' height='125px'
        WrapComponent={VisibilitySensorSpring}
        wrapComponentProps={{
          backgroundIn: () => ({ transform: 'translateY(0px)', opacity: 1 }),
          onVisibiltySensor: async ({
          isVisible,
          direction,
          setTextStyle, setBackgroundStyle,
          textOut, textIn,
          }) => {
          setBackgroundStyle(
            isVisible
            ? { transform: 'translateY(0px)', opacity: 1 }
            : { transform: `translateY(${direction ? -300 : 300}px)`, opacity: 0 }
          );
          if (isVisible) await delay(1000);
          setTextStyle(isVisible ? textIn() : textOut() );
          },
          backgroundColor: 'RGB(253, 210, 43)'
        }}
        style={{
          transform: scr2item3,
          // boxShadow: '0 5px 15px rgba(0, 0, 0, .1)'
        }}
      >
        <Typography component='p' variant='body2' align="right" style={{
          margin: '0 20px',
        }}>
        <img src ={rgsu} alt='российский государственный социальный университет' style={{
          float: 'left',
          width: '20%', height: '30%',
          marginTop: 25
        }} />
          Стратегический партнер ВШС – Российский государственный социальный университет.
        </Typography>
      </Text>
      <Text 
        left='60%' top='65%'
        width='350px' height='250px'
        WrapComponent={VisibilitySensorSpring}
        wrapComponentProps={{
          visibilitySensorProps: {offset: {top: -200 }},
          backgroundOut: () => ({ transform: 'translateY(300px)', opacity: 0 }),
          backgroundIn: () => ({ transform: 'translateY(0px)', opacity: 1 }),
          onVisibiltySensor: async ({
          isVisible,
          setTextStyle, setBackgroundStyle,
          textOut, textIn,
          backgroundOut, backgroundIn,
          }) => {
          setBackgroundStyle(isVisible ? backgroundIn() : backgroundIn() );
          if (isVisible) await delay(3000);
          setTextStyle(isVisible ? textIn() : textOut() );
          },
          backgroundColor: 'RGB(255, 234, 203)'
        }}
        style={{
          transform: scr2item2,
          // boxShadow: '0 5px 15px rgba(0, 0, 0, .1)'
        }}
      >
        <Typography component='p' variant='body2' align="center" style={{
          margin: '0 20px'
        }}>
          Комплексная программа обучения в области имидж-технологий и стилистики. 
          Основа – отличная теоретическая подготовка в сочетании 
          с формированием творческого мышления и регулярной практикой 
          создания модных и стильных образов. Результат: системные знания, 
          новые возможности профессионального развития, технологии работы с 
          клиентами и модными трендами.
        </Typography>
      </Text>
    </div>
  </>);
}
  