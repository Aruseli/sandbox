import React from 'react';

import Link from 'next/link';

import {Card, CardContent, List, ListItem, ListItemText, CardMedia, makeStyles} from "@material-ui/core";

import { YMaps, Panorama } from 'react-yandex-maps';

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}))

export const CardContacts = ({
  address,
  phoneOne,
  phoneTwo,
  workTime,
  image
}) => {
  const classes = useStyles({});

  return (
  <Card>
    <CardContent>
      <List>
        <ListItem>
          <ListItemText primary="Адрес" secondary={address} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Телефон" secondary={
            <div>
              <Link href={phoneOne}>
              <a style={{
                color: 'inherit',
                textDecoration: 'none'
              }}>{phoneOne}</a></Link><br/>
              <a href="tel:{{phoneTwo}}" style={{
                color: 'inherit',
                textDecoration: 'none'
              }}>{phoneTwo}</a>
            </div>
          } />
        </ListItem>
        <ListItem>
          <ListItemText primary="Время работы" secondary={workTime} />
        </ListItem>
      </List>
    </CardContent>
    <div style={{
      padding: 15
    }}>
    <CardMedia 
     className={classes.media}
       image={image}
      />
    </div>
    
  </Card>
  )
}
