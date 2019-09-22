import React, { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Theme, useMediaQuery, Typography } from '@material-ui/core';
import Vivus from 'vivus';

const defaultCallback = () => {};

export const Draw = ({
  id,
  style = {},
  callback = defaultCallback,
  ...props
}) => {
  useEffect(() => {
    new Vivus(id, props, callback);
  }, []);

  return <div id={id} style={style} />;
};
