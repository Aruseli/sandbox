import React from 'react';

import {BlocksPosition} from '../left-block-imagemaker/blocks-position';
import { ChildrenResponsive } from '../../../packages/children-responsive';

export const Picture = ({
  left,
  top,
  width,
  height,
  src,
  alt,
  style,
  fill = true,
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
      <ChildrenResponsive fill={fill}>
        <img src={src} alt={alt} /> 
      </ChildrenResponsive>
    </BlocksPosition>
  );
}
  