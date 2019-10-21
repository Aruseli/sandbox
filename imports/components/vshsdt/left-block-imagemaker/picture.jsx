import React from 'react';

import {BlocksPosition} from '../left-block-imagemaker/blocks-position';
import {ImageResponsiveSensor} from '../../../sandbox/image-responsive-sensor';

export const Picture = ({
  left,
  top,
  width,
  height,
  src,
  alt,
  style,
  WrapComponent,
  wrapComponentProps,
  onClick
}) => {
  return (
    <BlocksPosition
      left={left} top={top} width={width} height={height} style={style}
      WrapComponent={WrapComponent}
      wrapComponentProps={wrapComponentProps}
      onClick={onClick}
    > 
      <ImageResponsiveSensor>
        <img src={src} alt={alt} /> 
      </ImageResponsiveSensor>
    </BlocksPosition>
  );
}
  