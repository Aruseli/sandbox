import { makeStyles } from '@material-ui/styles';

import React from 'react';

import {Comments} from '../../slider'; 

const useStyle = makeStyles(() => ({
  screen: {
  position: 'relative',
  width: '100%',
  height: '70vh',
  },
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
  