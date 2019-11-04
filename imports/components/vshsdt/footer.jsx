import { makeStyles, Typography, Hidden, List, ListItem, ListItemText, Grid, ListItemAvatar, TextField } from "@material-ui/core";

import Link from 'next/link';

import React from "react";

import { Subscribe } from "./subscribe";

const useStyles = makeStyles(theme => ({
  paddingBetween: {
    padding: 0,
  }
}));

const fb = require("../../../images/fb.svg");
const vk = require("../../../images/vk.svg");
const inst = require("../../../images/instagram.svg");
const map = require("../../../images/maraudersMap.svg");

export const Footer = ({ paddingTop, ...props }) => {
  const classes = useStyles({});

  return (<>
      <Hidden xsDown implementation='css'>
        <div style={{
          backgroundColor: '#00000027',
          paddingTop: paddingTop,
          height: '70vh'
        }}>
          <div style={{
            position: 'relative'
          }}>
            <Grid
              container
              justify="center"
              alignItems='center'
              style={{
                position: 'absolute',
                top: -100
              }}
            >
              <Grid item xs={7}>
                <img src={map} style={{
                  width: '100%'
                }}/>
              </Grid>
            </Grid>
          </div>
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
                        <span>
                          Российский государственный социальный университет<br />
                          Российский государственный университет туризма и сервиса
                        </span>
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
                alignItems="flex-start"
              >
                <Grid item>
                  <List>
                    <ListItem>
                      <ListItemText primary='Телефон' secondary={
                        <span>
                          +7 (495) 221-89-35<br />
                          8 (800) 550-78-93
                        </span>
                      } />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary='Время работы' secondary='Пн - Пт с 10:00 до 19:00 (мск)' />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <>
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
                        </>
                      </ListItemAvatar>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Grid 
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-start"
                style={{
                  height: '15vh'
                }}>
                <Grid item xs={10}>
                  <Typography variant='subtitle1' component="h2">Подписаться на новости курса</Typography>
                </Grid>
                <Grid item xs={10} style={{
                  position: 'relative'
                }}>
                  <Subscribe />            
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid 
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
          </Grid> */}
        </div>
      </Hidden>
      <Hidden smUp implementation='css'>
      <div style={{
        backgroundColor: '#f7a22b',
        paddingTop: paddingTop,
        minHeight: '70vh'
      }}>
        <div style={{
          position: 'relative'
        }}>
          <Grid
            container
            justify="center"
            alignItems='center'
          >
            <Grid item xs={10}  
            // style={{paddingTop: 30}}
            >
              <List disablePadding>
                  <ListItem className={classes.paddingBetween}>
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
                  <ListItem className={classes.paddingBetween}>
                    <ListItemText primary='Адрес' secondary="г. Москва, Проспект Мира, дом 101, стр. 1, 600 офис" />
                  </ListItem>
                  <ListItem className={classes.paddingBetween}>
                    <ListItemText primary='Партнеры' secondary={
                      <span>
                        Российский государственный социальный университет<br />
                        Российский государственный университет туризма и сервиса
                      </span>
                    } />
                  </ListItem>
                   <ListItem className={classes.paddingBetween}>
                    <ListItemText primary='Телефон' secondary={
                      <span>
                        +7 (495) 221-89-35<br />
                        8 (800) 550-78-93
                      </span>
                    } />
                  </ListItem>
                  <ListItem className={classes.paddingBetween}>
                    <ListItemText primary='Время работы' secondary='Пн - Пт с 10:00 до 19:00 (мск)' />
                  </ListItem>
                  <ListItem className={classes.paddingBetween}>
                    <ListItemAvatar>
                      <>
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
                      </>
                    </ListItemAvatar>
                  </ListItem>
                </List>
            </Grid>
            <Grid item xs={10} style={{paddingTop: 30, paddingBottom: 30}}>
                {/* <Typography variant='subtitle1' component="h2">Подписаться на новости курса</Typography>
              </Grid>
              <Grid item style={{
                position: 'relative'
              }}> */}
              <TextField
                margin='dense'
                id="outlined-full-width"
                label="Подписаться на новости курса"
                style={{ margin: 8 }}
                placeholder="your@email.com"
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />           
            </Grid>
          </Grid>
        </div>
      </div>
    </Hidden>
    </>
  );
};
