import React, {useState, useContext, useRef} from 'react';

import {Grid, makeStyles} from '@material-ui/core';

import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';

import { animated as a, interpolate } from 'react-spring';

import { ChildrenResponsive } from '../../packages/children-responsive';
import { SpringContext } from '../../../pages/imagemaker';

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

const useStyle = makeStyles(() => ({
  animation: {
    transition: 'all 1s ease',
  }
}));

const calcRealIndex = (comments, stateI, commentI) => {
  var ti = commentI + stateI;
  return ti > comments.length - 1 ? ti - comments.length : ti;
};

export const Comments = ({}) => {
  const classes = useStyle();
  const [index, setIndex] = useState(0);

  const { spx } = useContext(SpringContext);

  const scrRef = useRef();
  
  const getTop = (ref) => ref.current ? ref.current.offsetTop : 0;

  const scrItem = interpolate([spx], (spx) => `translateY(${-((spx - getTop(scrRef)) * 0.1) + 5}px)`);
  console.log(scrRef);

  const onPrevClick = () => {
    setIndex(index>0 ? index - 1 : comments.length - 1);
  };

  const onNextClick = () => {
    setIndex(comments.length - 1 == index ? 0 : index + 1);
  };

  return(
    <Grid 
      ref={scrRef} 
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
          onClick={onNextClick}
        >
          <ArrowBackIos />
        </div>
        {comments.map((value, ci) => {
          const i = calcRealIndex(comments, index, ci);
          return <div key={value.id}
            className={classes.animation}
            style={{
              position: 'absolute',
              height: '70%',
              width: '70%',
              left: i * 30,
              zIndex: comments.length - i,
              transform: i > 1
                ? 'perspective(100px) rotateY(-5deg) translateX(0px)'
                : i == 0
                ? 'perspective(100px) rotateY(5deg) translateX(-200px)'
                : 'perspective(100px) rotateY(0deg) translateX(0px)',
              opacity: i ? 1 : 0,
              filter: i > 1
                ? 'brightness(0.5)'
                : 'brightness(1)',
            }}
          >
            <ChildrenResponsive>
              <img src={value.src} alt={value.alt} style={{width: '100%'}} />
            </ChildrenResponsive>
          </div>
        })}
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
          onClick={onPrevClick}
        >
          <ArrowForwardIos />
        </div>
        {comments.map((value, ci) => {
          const i = calcRealIndex(comments, index, ci);
          return <a.div 
            key={value.id}
            style={{
              transform: scrItem,
              position: 'absolute',
              left: 20,
              top: -70,
              overflowY: 'scroll',
              height: '100%',
              width: '100%',
              transition: 'left 1s ease, opacity 1s ease',
              opacity: i != 1 ? 0 : 1,
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
          </a.div>
        })}
      </Grid>
    </Grid>
  );
}