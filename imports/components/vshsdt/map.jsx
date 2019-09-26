import { makeStyles, Typography, Hidden, List, ListItem, ListItemText, Grid, ListItemAvatar } from "@material-ui/core";

import Link from 'next/link';

import React from "react";

import { Subscribe } from "./subscribe";

const useStyles = makeStyles(theme => ({
}));

const fb = require("../../../images/fb.svg");
const vk = require("../../../images/vk.svg");
const inst = require("../../../images/instagram.svg");

export const Map = ({ ...props }) => {
  const classes = useStyles({});
  // const theme = useTheme();
  // const xsDown = useMediaQuery(theme.breakpoints.down('xs'));

  return (
  <>
    <div style={{
      position: 'relative',
      backgroundColor: '#f7a22b', 
      width: '100%' ,
      height: '90vh',
      top: 0,
      left: 0
    }}>
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="flex-end"
        style={{
          position: 'absolute',
          top: 200
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
                  <ListItemText primary='Кампус' secondary={
                    <>
                      <Link href='https://styleschool.ru/'><span style={{
                        color: '#000'
                      }}>Москва</span></Link>
                      <br />
                      <Link href='https://novosib.styleschool.ru/' style={{
                        color: '#000'
                      }}>Новосибирск</Link>
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
                  <ListItemText primary='Телефон' secondary={
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
                      <img src={fb} alt='facebook' style={{
                        width: 20,
                        height: 20,
                        marginRight: 20
                      }} />
                    </Link>
                    <Link href='https://www.instagram.com/styleschool_msk/'>
                      <img src={inst} alt='instagram' style={{
                        width: 20,
                        height: 20,
                        marginRight: 20
                      }} />
                    </Link>
                    <Link href='https://vk.com/stylemsk'>
                      <img src={vk} alt='vkontakte' style={{
                        width: 20,
                        height: 20
                      }} />
                    </Link>
                  </ListItemAvatar>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid 
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={4}>
          <Grid item>
            <Typography variant='h6' component="h2">Подписаться на новости факультета</Typography>
          </Grid>
          <Grid item style={{
            position: 'relative'
          }}>
            <Subscribe />            
          </Grid>
        </Grid>
      </Grid>
    </div>
  </>
  );
};
