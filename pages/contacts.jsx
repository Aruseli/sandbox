import '../imports/i18n';

import {
  useTheme,
  Grid,
  Typography,
  useMediaQuery,
  Paper,
  Button,
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Parallax, Background } from 'react-parallax';

import { Body } from '../imports/components/body';
import { theme as defaultTheme } from '../imports/theme';
import { wrapPage } from '../imports/wrap-page';
import { Spacing } from '../imports/components/spacing';
import { InsideSlide } from '../imports/components/effects';
import { Draw } from '../imports/components/draw';
import HeaderFacults from '../imports/components/vshsdt/header-facults';
import {Contacts} from '../imports/components/vshsdt/contacts';

export default () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Body>
          {/* <HeaderFacults
      screen={'style'}
    /> */}
          <Contacts />
        </Body>
      </ThemeProvider>
    </>
  );
};
