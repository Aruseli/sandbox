import {
  makeStyles,
  ListItem,
  ListItemText,
  Typography,
  List,
} from '@material-ui/core';

import React from 'react';

import { animated as a, interpolate } from 'react-spring';


export const BlockThree = ({
  header,
  duration,
  total,
}) => {
  return (
    <>
      <ListItem style={{
        backgroundColor: '#ffeee8'
      }}>   
        <ListItemText primary={
          <Typography component="h1" variant="h6">{header}</Typography>
        } secondary={<Typography component="h1" variant="body1">{duration}</Typography>} />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ffddd2'
      }}>
        <ListItemText secondary='изучение истории моды от древности до наших дней как необходимой базы в практике fashion-стилиста' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ffccbc'
      }}>
        <ListItemText secondary='изучение специальных дисциплин по композиции для стилистов' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ffbba6'
      }}>
        <ListItemText secondary='развитие навыков креативного мышления (эвристика)' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ffab90'
      }}>
        <ListItemText secondary='изучение метода ассоциаций для создания художественного образа или fashion-образа' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ff9a7a'
      }}>
        <ListItemText secondary='метод эмоциональных линий' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ff8964'
      }}>
        <ListItemText secondary='особенности стилизации проектов для клиентов и глянца' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ff784e'
      }}>
        <ListItemText secondary='источники вдохновения для имиджмейкеров и стилистов, метод исследования' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ff6738'
      }}>
        <ListItemText secondary='практика создания и презентации mood-boards' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ff5722'
      }}>
        <ListItemText secondary='изучение основ коммуникаций стилистов с фотографами, моделями, визажистами' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#FF4B14'
      }}>
        <ListItemText secondary='практика работы в команде и реализации fashion-съемки' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#FF3F05'
      }}>
        <ListItemText secondary='практика работы в команде и реализации имиджевой сьемки' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#F43900'
      }}>
        <ListItemText secondary='практика работы в команде и реализации предметной сьемки' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#E53500'
      }}>
        <ListItemText primary={
          <>
            <Typography component='h2' variant='h6'>
              Специальный модуль: Теория и практика моды
            </Typography>
            <List>
              <ListItem>
                <ListItemText secondary='мода как система, мода как бизнес' />
              </ListItem>
              <ListItem>
                <ListItemText secondary='теория и аналитика fashion-индустрии' />
              </ListItem>
              <ListItem>
                <ListItemText secondary='анализ модных трендов и обзор актуальных показов' />
              </ListItem>
              <ListItem>
                <ListItemText secondary='сегменты fashion-рынка' />
              </ListItem>
              <ListItem>
                <ListItemText secondary='понятие и анализ ДНК брендов' />
              </ListItem>
            </List>
          </>
        } />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#D83200'
      }}>
        <ListItemText primary={total} />
      </ListItem>
    </>
  );
}