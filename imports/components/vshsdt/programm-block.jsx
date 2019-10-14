import {
    makeStyles,
    Typography,
    List,
    ListItem,
    ListItemText,
    Hidden,
    Paper,
} from '@material-ui/core';

import React from 'react';

import { animated as a, interpolate } from 'react-spring';

import { Container } from '../container';
import { BlockOne } from './programm-blocks/block-one';
import { BlockTwo } from './programm-blocks/block-two';
import { BlockThree } from './programm-blocks/block-three';
import { BlockFour } from './programm-blocks/block-four';
  
  
export const ProgrammBlock = ({}) => {
  return (
    <Paper>
      <List>
        <BlockOne 
          header='1, 2, 3 месяцы: 1-й уровень. Основы имиджмейкинга (Style Basic)' 
          duration="120 ак.ч." 
          total='Итоговая аттестация: ЗАЧЕТ (тест)'
        />
        <BlockTwo 
          header='4, 5, 6 месяцы: 2-й уровень.
          Имидж-консалтинг (Personal styling)' 
          duration="120 ак.ч." 
          total='ЭКЗАМЕН (защита проектной работы)'
        />
        <BlockThree 
          header='7-10 месяцы: 3-й уровень.
          Стилистика моды (Fashion styling)' 
          duration="180 ак.ч." 
          total='ЭКЗАМЕН (защита проектной работы)'
        />
        <BlockFour 
          header='11 месяц: 4-й уровень.
          Личный бренд (Personal branding)' 
          duration="60 ак.ч." 
          // total='ЭКЗАМЕН (защита проектной работы)'
        />
      </List>
    </Paper>
  );
}
    