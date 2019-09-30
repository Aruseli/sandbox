import React, {useState} from 'react';

import { YMaps, Map, Placemark, GeolocationControl, Panorama } from 'react-yandex-maps';

import {CardContacts} from "./card-contacts";
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fff',
    borderRadius: 0,
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2), 0px 1px 3px 0px rgba(0,0,0,0.14), 0px 2px 1px -2px rgba(0,0,0,0.12)'
  },
  margin: {
    marginBottom: 10
  }
}))

var propertiesMap = {
  moscow: { 
    mapProp: {
      center : [55.811791, 37.636338],
      zoom : 15
    },
    placemarkProp: {
      geometry: {
      coordinates: [55.811791, 37.636338]
      },
      properties: {
      hintContent: 'Проспект Мира, 101с1',
      balloonContent: 'Small icon'
      },
      options: {
      iconLayout: 'default#image',
      iconImageHref: 'pages/contacts/location.png',
      iconImageSize: [40, 40],
      }   
    }
  },
  
  novosib: {
    mapProp: {
      center : [55.027903, 82.926727],
      zoom : 15
    },
    placemarkProp: {
      geometry: {
      coordinates: [55.027903, 82.926727]
      },
      properties: {
      hintContent: 'ул. Максима Горького, 79',
      balloonContent: 'Small icon'
      },
      options: {
      iconLayout: 'default#image',
      iconImageHref: 'pages/contacts/location.png',
      iconImageSize: [40, 40],
      }  
    }
  },
};

const address = {
  moscow: {
    address: 'г. Москва, Проспект Мира, дом 101, стр. 1, 600 офис',
    phoneOne: '+7 (495) 221-89-35',
    phoneTwo: '8 (800) 550-78-93',
    workTime: 'Пн - Пт с 10:00 до 19:00 (мск)',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1J9o5SlFKBUyYMF43P5jQn1nzRfz3x1gob7jwdurPVAC0m1B7'
  },
  novosib: {
    address: 'г. Новосибирск, ул. Максима Горького, 79. Бизнес-центр «Консул», 2 этаж',
    phoneOne: '+7 (383) 288-33-38',
    phoneTwo: '8 (800) 550-78-93',
    workTime: 'Пн - Пт с 10:00 до 19:00',
    image: 'https://avatars.mds.yandex.net/get-altay/1246719/2a00000162de7c4ca8a24940abe8aa11493f/XXL'
  },
}


export const Contacts = ({...props}) => {
  const [changeCoords, setCoords] = useState({coord : 'moscow'}); 
  const [changeAddress, setAddress] = useState({address: 'moscow'});
  const classes = useStyles({});

  return (
    <>
      <YMaps>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          }}>
          <Map
            state={
              propertiesMap[changeCoords.coord].mapProp
            }
            width="100%"
            height="100%"
          >
            <Placemark
              geometry={
                propertiesMap[changeCoords.coord].mapProp.center
              }
              properties={{
                balloonContentBody: "Your address"
              }}
            />
            <GeolocationControl options={{ float: "left" }} />
          </Map>
        </div>
      </YMaps>
      <div style={{
        position: 'absolute',
        top: '15%',
        right: 0,
        height: 0,
      }}>
        <div style={{
          width: 350,
          maxHeight: '100vh',
          transformOrigin: 'right center',
          transform: 'translateY(-15%)',
          overflowY: 'scroll',
          padding: 15,
          }}>
          <div>
            <CardContacts 
             address={
              changeCoords.coord ? address[changeCoords.coord].address : changeCoords.coord
             }
             phoneOne={
              changeCoords.coord ? address[changeCoords.coord].phoneOne : changeCoords.coord
             }
             phoneTwo={
              changeCoords.coord ? address[changeCoords.coord].phoneTwo : changeCoords.coord
             }
             workTime={
              changeCoords.coord ? address[changeCoords.coord].workTime : changeCoords.coord
             }
             image={
               changeCoords.coord ? address[changeCoords.coord].image : changeCoords.coord
             }
            />
          </div>
        </div>
      </div>
      <div style={{
        position: 'absolute',
        top: '10%',
        left: 0,
        height: 0,
      }}>
        <div style={{
          width: 150,
          transform: 'translateY(-10%)',
          padding: 15,
          }}>
          <Button className={classes.margin} classes={{root: classes.root}} variant="contained" size='large' onClick={() => setCoords({coord: 'moscow'})}>Москва</Button>
          <Button className={classes.margin} classes={{root: classes.root}} variant="contained" size='large' onClick={() => setCoords({coord: 'novosib'})}>Новосибирск</Button>
         </div>
      </div>
    </>
  )
}
