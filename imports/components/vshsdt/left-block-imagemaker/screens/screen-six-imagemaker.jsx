import { makeStyles } from '@material-ui/styles';

import React from 'react';

import {Comments} from '../../slider'; 

const useStyle = makeStyles(() => ({
  
}));

export const ScreenSix = ({}) => {
  const classes = useStyle();

  return (<>
    <div style={{
      marginTop: 50
    }}>
      <Comments />
    </div>
  </>);
}
  