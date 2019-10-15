import React from 'react';

export const BlocksPosition = ({
  left,
  top,
  width,
  height,
  children
}) => {

  return (
    <div style={{
      position: 'absolute',
      left: `calc(${left} - (${width} / 2))`,
      top: `calc(${top} - (${height} / 2))`,
      backgroundColor: 'red',
      width: width,
      height: height,
      overflow: 'hidden'
    }}>
      {children}
    </div>
  );
}
  