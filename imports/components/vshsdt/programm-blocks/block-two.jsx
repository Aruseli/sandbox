import {
  makeStyles,
  ListItem,
  ListItemText,
  Typography,
  List,
} from '@material-ui/core';

import React from 'react';

import { animated as a, interpolate } from 'react-spring';


export const BlockTwo = ({
  header,
  duration,
  total,
}) => {
  return (
    <>
      <ListItem style={{
        backgroundColor: '#fff4e5'
      }}>   
        <ListItemText primary={
          <Typography component="h1" variant="h6">{header}</Typography>
        } secondary={<Typography component="h1" variant="body1">{duration}</Typography>} />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ffeacc'
      }}>
        <ListItemText secondary='управление впечатлением' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ffe0b2'
      }}>
        <ListItemText secondary='структура имиджа, оценка впечатления' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ffd599'
      }}>
        <ListItemText secondary='психологические особенности разработки имиджа' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ffcb7f'
      }}>
        <ListItemText secondary='имиджевое восприятие и инструменты влияния' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ffc166'
      }}>
        <ListItemText secondary='концепция индивидуального стиля. Теория стилевых направлений' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ffb64c'
      }}>
        <ListItemText secondary='концепция индивидуального стиля. Смешение стилевых направлений' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ffac33'
      }}>
        <ListItemText secondary='мужской стиль. Особенности стильного образа у мужчин' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ffa219'
      }}>
        <ListItemText secondary='дресс-коды, этикет' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ff9800'
      }}>
        <ListItemText secondary='практика формирования клиентского STYLE BOOK' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#E58900'
      }}>
        <ListItemText secondary='изучение особенностей презентации себя как профессионала в соц. сетях (Instagram)' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#CC7A00'
      }}>
        <ListItemText primary={
          <>
            <Typography component='h2' variant='h6'>
              Специальный модуль: Профайлинг
            </Typography>
            <List>
              <ListItem>
                <ListItemText secondary='изучение психологии клиентов, правил коммуникаций с клиентами' />
              </ListItem>
              <ListItem>
                <ListItemText secondary='современная система профайлинга и психотипирования' />
              </ListItem>
              <ListItem>
                <ListItemText secondary='алгоритмы работы с клиентами' />
              </ListItem>
            </List>
          </>
        } />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#BF7200'
      }}>
        <ListItemText primary={total} />
      </ListItem>
    </>
  );
}