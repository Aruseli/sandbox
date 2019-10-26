import { makeStyles, Typography, Hidden, List, ListItem, ListItemText, Grid, ListItemAvatar } from "@material-ui/core";

import Link from 'next/link';

import React from "react";

import { Subscribe } from "./subscribe";

const useStyles = makeStyles(theme => ({
}));

const fb = require("../../../images/fb.svg");
const vk = require("../../../images/vk.svg");
const inst = require("../../../images/instagram.svg");

export const Footer = ({ paddingTop, ...props }) => {
  const classes = useStyles({});

  return (
  <div style={{
    backgroundColor: '#f7a22b',
    paddingTop: paddingTop,
  }}>
    <Grid 
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{
        position: 'relative', 
        width: '100%',
        top: 0,
        left: 0
      }}
    >
      <Grid item xs={8}>
        <Grid 
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item>
            <List>
              <ListItem>
                <ListItemText primary='Кампусы' secondary={
                  <>
                    <Link href='https://styleschool.ru/'><a style={{
                      color: '#000'
                    }}>Москва</a></Link>
                    <br />
                    <Link href='https://novosib.styleschool.ru/'><a style={{
                      color: '#000'
                    }}>Новосибирск</a></Link>
                  </>
                } />
              </ListItem>
              <ListItem>
                <ListItemText primary='Адрес' secondary="г. Москва, Проспект Мира, дом 101, стр. 1, 600 офис" />
              </ListItem>
              <ListItem>
                <ListItemText primary='Партнеры' secondary={
                  <div>
                    Российский государственный социальный университет<br />
                    Российский государственный университет туризма и сервиса
                  </div>
                } />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <Grid item>
            <List>
              <ListItem>
                <ListItemText component="div" primary='Телефон' secondary={
                  <div>
                    +7 (495) 221-89-35<br />
                    8 (800) 550-78-93
                  </div>
                } />
              </ListItem>
              <ListItem>
                <ListItemText primary='Время работы' secondary='Пн - Пт с 10:00 до 19:00 (мск)' />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Link href='https://www.facebook.com/styleschool.ru/'>
                    <a>
                      <img src={fb} alt='facebook' style={{
                        width: 20,
                        height: 20,
                        marginRight: 20
                      }} />
                    </a>
                  </Link>
                  <Link href='https://www.instagram.com/styleschool_msk/'>
                    <a>
                      <img src={inst} alt='instagram' style={{
                        width: 20,
                        height: 20,
                        marginRight: 20
                      }} />
                    </a>
                  </Link>
                  <Link href='https://vk.com/stylemsk'>
                    <a>
                      <img src={vk} alt='vkontakte' style={{
                        width: 20,
                        height: 20
                      }} />
                    </a>
                  </Link>
                </ListItemAvatar>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid 
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={4} style={{
        height: '30vh'
      }}>
      <Grid item>
        <Typography variant='h6' component="h2">Подписаться на новости факультета</Typography>
      </Grid>
      <Grid item style={{
        position: 'relative'
      }}>
        <Subscribe />            
      </Grid>
    </Grid>
  </div>
  );
};
