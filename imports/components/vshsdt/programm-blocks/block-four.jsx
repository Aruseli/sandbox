import {
  makeStyles,
  ListItem,
  ListItemText,
  Typography,
  List,
} from '@material-ui/core';

import React from 'react';

import { animated as a, interpolate } from 'react-spring';


export const BlockFour = ({
  header,
  duration,
  // total,
}) => {
  return (
    <>
      <ListItem style={{
        backgroundColor: '#ffe8ee'
      }}>   
        <ListItemText primary={
          <Typography component="h1" variant="h6">{header}</Typography>
        } secondary={<Typography component="h1" variant="body1">{duration}</Typography>} />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ffd2de'
      }}>
        <ListItemText secondary='имидж-технологии в управлении деловой репутацией' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ffbccd'
      }}>
        <ListItemText secondary='профессиональный стиль' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ffa6bd'
      }}>
        <ListItemText secondary='этапы создания личного бренда' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ff90ad'
      }}>
        <ListItemText secondary='способы продвижения профессиональных услуг стилиста и имиджмейкера на рынке' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ff7a9c'
      }}>
        <ListItemText secondary='формирование портфолио стилиста' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ff648c'
      }}>
        <ListItemText secondary='подготовка к защите дипломной работы' />
      </ListItem>
      <ListItem style={{
        backgroundColor: '#ff4e7b'
      }}>
        <ListItemText primary={
          <>
            <Typography component='h2' variant='h6'>
              Специальный модуль: Основы создания текстов о моде
            </Typography>
            <List>
              <ListItem>
                <ListItemText secondary='блоггинг как творчество и блоггинг как бизнес' />
              </ListItem>
              <ListItem>
                <ListItemText secondary='создание текстов о моде и стиле' />
              </ListItem>
              <ListItem>
                <ListItemText secondary='создания текстов и подбора иллюстраций для интернет и соц. сетей' />
              </ListItem>
            </List>
          </>
        } />
      </ListItem>
      {/* <ListItem style={{
        backgroundColor: '#BF7200'
      }}>
        <ListItemText primary={total} />
      </ListItem> */}
    </>
  );
}