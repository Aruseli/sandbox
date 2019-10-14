import {
  makeStyles,
  Typography,
  ListItem,
  ListItemText,
} from '@material-ui/core';

import React from 'react';

import { animated as a, interpolate } from 'react-spring';


export const BlockOne = ({
  header,
  duration,
  total,
}) => {
  return (
    <>
      <ListItem style={{
        backgroundColor: '#fffdeb'
      }}>   
        <ListItemText primary={<Typography component="h1" variant="h6">{header}</Typography>
        } secondary={<Typography component="h1" variant="body1">{duration}</Typography>} />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#fffbd7'
      }}>
        <ListItemText secondary='колористика и цветовой анализ внешности как профессиональный инструмент стилиста' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#fff9c4'
      }}>
        <ListItemText secondary='психология формы и силуэтов, современные типологии фигур, возможности и способы визуальной коррекции с помощью одежды' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#fff7b0'
      }}>
        <ListItemText secondary='изучение основных групп современных стилей как системы для транслирования необходимого впечатления в имидже' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#fff59d'
      }}>
        <ListItemText secondary='изучение аксессуаров, головных уборов, обуви, правил и способов их подбора с учетом fashiontrends' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#fff389'
      }}>
        <ListItemText secondary='профессиональный глоссарий стилиста, изучение профессиональной лексики и терминологии' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#fff175'
      }}>
        <ListItemText secondary='теория стилевых направлений как действенный инструмент в создании индивидуального стиля' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ffef62'
      }}>
        <ListItemText secondary='мужская стилистика, ее особенности, практика применения и современные тренды' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ffed4e'
      }}>
        <ListItemText secondary='изучение типов современного гардероба, создание гардеробных капсул' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ffeb3b'
      }}>
        <ListItemText secondary='теория и практика шопинга, в том числе on-line шопинга' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#FFE819'
      }}>
        <ListItemText primary={total} />
      </ListItem>
    </>
  );
}