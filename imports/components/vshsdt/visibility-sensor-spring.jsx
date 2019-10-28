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
  textOut = () => ({  }),
  textIn = () => ({  }),
  backgroundOut = () => ({ 
    // transform: 'translateY(-100px)' 
  }),
  backgroundIn = () => ({ 
    // transform: 'translateY(0px)' 
  }),
  backgroundColor='transparent',
  ...style
}) => {
  const [textStyle, setTextStyle] = useSpring(textOut);
  const [backgroundStyle, setBackgroundStyle] = useSpring(backgroundOut);
  const [prevScrollTop, setPrevScrollTop] = useState(0);
  
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
      <a.div
      style={{
        width: '100%',
        height: height,
        backgroundColor: backgroundColor,
        position: 'absolute',
        top: 0, left: 0,
        ...backgroundStyle,
      }}
      />
      <a.div style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0, left: 0,
        ...textStyle,
      }}>
        {children}
      </a.div>
    </>
  </VisibilitySensor>;
};