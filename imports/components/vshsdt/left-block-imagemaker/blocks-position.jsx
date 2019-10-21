import React from 'react';
import { animated as a } from 'react-spring';

const _WrapComponent = ({ children }) => children;

export const BlocksPosition = ({
  left,
  top,
  width,
  height,
  children,
  style,
  WrapComponent = _WrapComponent,
  wrapComponentProps,
  onClick,
}) => {

  return (
    <a.div style={{
      position: 'absolute',
      left: `calc(${left} - (${width} / 2))`,
      top: `calc(${top} - (${height} / 2))`,
      width: width,
      height: height,
      ...style
    }} onClick={onClick}>
      <WrapComponent {...wrapComponentProps}>
        {children}
      </WrapComponent>
    </a.div>
  );
}
  