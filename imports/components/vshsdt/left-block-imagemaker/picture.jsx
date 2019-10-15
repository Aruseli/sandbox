import React from 'react';

import {BlocksPosition} from '../left-block-imagemaker/blocks-position';

export const Picture = ({
  left,
  top,
  width,
  height,
  src,
  alt
}) => {
  return (
    <BlocksPosition left={left} top={top} width={width} height={height}> 
      <div style={{
        width: '100%'
      }}>
        <img src={src} alt={alt} style={{
          width: '100%'
        }} />
      </div>  
    </BlocksPosition>
  );
}
  