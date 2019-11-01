import React, {useState} from 'react';

import VisibilitySensor from 'react-visibility-sensor';

import {useSpring, animated as a } from 'react-spring';

export const delay = (time) => new Promise(res => setTimeout(res, time));

export const VisibilitySensorSpring = ({
  height = '100%',
  children,
  onVisibiltySensor = async ({
    isVisible,
    setTextStyle, setBackgroundStyle,
    textOut, textIn,
    backgroundOut, backgroundIn,
  }) => {
    await delay(1000);
    setTextStyle(isVisible ? textIn() : textOut() );
    setBackgroundStyle(isVisible ? backgroundIn() : backgroundOut() );
  },
  textOut = () => ({ }),
  textIn = () => ({ }),
  backgroundOut = () => ({ }),
  backgroundIn = () => ({ }),
  backgroundColor='transparent',
  bgInText = false,
}) => {
  const [textStyle, setTextStyle] = useSpring(textOut);
  const [backgroundStyle, setBackgroundStyle] = useSpring(backgroundOut);
  const [prevScrollTop, setPrevScrollTop] = useState(0);

  const bgDiv = <a.div
    style={{
      width: '100%',
      height: height,
      backgroundColor: backgroundColor,
      position: 'absolute',
      top: 0, left: 0,
      ...backgroundStyle,
    }}
  />;
  
  return <VisibilitySensor
    onChange={(isVisible) => {
      const scrollTop = document.getElementById('scrollable-page').scrollTop;
      const direction = scrollTop > prevScrollTop;
      onVisibiltySensor({
        isVisible,
        scrollTop, prevScrollTop,
        direction,
        setTextStyle, setBackgroundStyle,
        textOut, textIn,
        backgroundOut, backgroundIn,
      });
      setPrevScrollTop(scrollTop);
    }}
  >
    <>
      <div style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0, left: 0,
      }}/>
      {!bgInText && bgDiv}
      <a.div style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0, left: 0,
        ...textStyle,
      }}>
        {bgInText && bgDiv}
        {children}
      </a.div>
    </>
  </VisibilitySensor>;
};


// видимость не видимость
// вызывает некоторое действие при измении факта визимости
// !!! зависим от #scrollable-page пропропрородителя
// передает вычисления полученному пропсу-функции onVisibilitySensor
  // сообщает ей всё что известно в этот момент, позиции
  // видимость или не видимость, направление
const VisibilitySensorScript = ({
  onVisibiltySensor = async ({
    isVisible,
    scrollTop, prevScrollTop,
    direction,
  }) => {},
}) => {
  // хранилище предыдущего состояния проскроенности
  const [prevScrollTop, setPrevScrollTop] = useState(0);

  return <VisibilitySensor
    onChange={(isVisible) => {
      // на сколько проскроллена страница
      const scrollTop = document.getElementById('scrollable-page').scrollTop;
      const direction = scrollTop > prevScrollTop;
  
      onVisibiltySensor({
        isVisible,
        scrollTop, prevScrollTop,
        direction,
      });

      // сохраняем проскроенность сейчас на будущее как предыдущее состояние
      setPrevScrollTop(scrollTop);
    }}
  >
    <div/>
  </VisibilitySensor>
};


// это DOM дерево им пораждаюемое
// только как содержимое для слоя с фиксированными размерами
// не может исходить из размеров содержимого
const Tree = ({
  children,
  height,
  backgroundColor,
  bgInText = false,
}) => {
  const bgDiv = <div
    style={{
      width: '100%',
      height: height,
      backgroundColor: backgroundColor,
      position: 'absolute',
      top: 0, left: 0,
    }}
  />;

  return <>
    <div style={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0, left: 0,
    }}/>
    {!bgInText && bgDiv}
    <div style={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0, left: 0,
    }}>
      {bgInText && bgDiv}
      {children}
    </div>
  </>
};


