import React, {useState} from 'react';

import {Grid} from '@material-ui/core';

import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';

import {ImageResponsiveSensor} from '../../sandbox/image-responsive-sensor';

const comments = [
  {
    id: 1,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFJ-AxzLn3Xo_vQmKtpgcs7F2OE5zgToohR-Aom5e0avIulO_LA',
    alt: '1',
    content: `Lorem ipsum dolor sit amet, in nec petentium contentiones, in nihil putant dissentiet ius, 
    mei oratiointegre dolores ex. Magna delectus accommodare ei mea.`
  },
  {
    id: 2,
    src: 'https://www.girlup.org/wp-content/uploads/2018/06/girl-up-hero-group-1400x785.jpg',
    alt: '12',
    content: `Delectus dissentiet per ne. Putant meliore molestie ea nam, mel vidit prompta ea. 
    Nam ut oratio incorrupte scribentur, natum omnes te mea, nec oratio repudiare no.`
  },
  {
    id: 3,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJ_-6P55d7DGsZ4cAK37VRzd_SxOe2BQUsW9LECypQIfHpVwQQg',
    alt: '123',
    content: `No deterruisset definitiones est, ad docendi argumentum concludaturque sit, 
    suas probatus quo id. Ex omnesque intellegam vel, vim mediocrem mnesarchum ut.`
  },
  {
    id: 4,
    src: 'https://www.girlup.org/wp-content/uploads/2018/06/girl-up-hero-group-1400x785.jpg',
    alt: '1234',
    content: `Porro quando consequuntur ei sit, alienum dolores accumsan eu quo, pri malis 
    viris causae ei. Harum audiam voluptatibus his ei, ullum zril an pro.`
  }
]

export const Comments = ({}) => {
  const [index, setIndex] = useState(0);
  const realComments = [
    ...comments.slice(index),
    ...comments.slice(0,index)
  ];
  console.log(realComments);

  const onPrevClick = () => {
    setIndex(index>0 ? index - 1 : comments.length - 1);
  };

  const onNextClick = () => {
    setIndex(comments.length - 1 == index ? 0 : index + 1);
  };

  return(
    <Grid 
      container
      justify="center"
      alignItems="center"
      style={{height: '100vh'}}
    >
      <Grid item xs={10} sm={5} md={5} lg={5}
        style={{
          position: 'relative',
          height: '50%'
        }}
      >
        <div style={{
          position: 'absolute',
          left: -20,
          top: 'calc(50% - 82px)',
          zIndex: 99,
        }}
          onClick={onPrevClick}
        >
          <ArrowBackIos />
        </div>
        {realComments.map((value, index) => (
          <div key={value.id} style={{
            position: 'absolute',
            height: '70%',
            width: '70%',
            left: index * 30,
            zIndex: comments.length - index,
            transform: index > 1
              ? 'perspective(100px) rotateY(-5deg) translateX(0px)'
              : index == 0
              ? 'perspective(100px) rotateY(5deg) translateX(-200px)'
              : 'perspective(100px) rotateY(0deg) translateX(0px)',
            opacity: index ? 1 : 0,
            transition: 'all 1s ease',
            filter: index > 1
              ? 'brightness(0.5)'
              : 'brightness(1)',
          }}
          >
            <ImageResponsiveSensor>
              <img src={value.src} alt={value.alt} style={{width: '100%'}} />
            </ImageResponsiveSensor>
          </div>
        ))}
      </Grid>
      <Grid item xs={10} sm={5} md={5} lg={5}
        style={{
          position: 'relative',
          height: '50%'
        }}
      >
        <div style={{
          position: 'absolute',
          right: -45,
          top: 'calc(50% - 82px)',
          zIndex: 99,
        }}
          onClick={onNextClick}
        >
          <ArrowForwardIos />
        </div>
        {realComments.map((value, index) => (
          <div key={value.id} style={{
            position: 'absolute',
            left: 20,
            top: -70,
            overflow: 'scroll',
            height: '100%',
            width: '100%',
            transition: 'all 1s ease',
            opacity: index != 1 ? 0 : 1,
            border: '1px solid #ededed',
            zIndex: 1,
            background: 'rosybrown',
            boxSizing: 'border-box',
            padding: 30
          }}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              style={{
                minHeight: '100%'
              }}
            >
              <Grid item>
                {value.content}
              </Grid>
            </Grid>
          </div>
        ))}
      </Grid>
    </Grid>
  );
}