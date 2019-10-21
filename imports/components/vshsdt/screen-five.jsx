import { Grid, makeStyles, Typography, Hidden } from "@material-ui/core";

import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

import { Spacing } from "../spacing";
import {Container} from "../container";

import { ReviewFoto } from "./review-foto";
import { ReviewText } from "./review-text";
import { Footer } from "./footer";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main
  },
  left: {
    position: 'absolute',
    zIndex: 99999,
    top: 25,
    left: -15,
    width: 30,
    height: 200,
    background: 'rgba(0, 0, 0, .35)',
  },
  right: {
    position: 'absolute',
    zIndex: 99999,
    top: 25,
    right: -15,
    width: 30,
    height: 200,
    background: 'rgba(0, 0, 0, .35)',
  },
  slickSlider: {
    '& .slick-slide': {
      transition: 'all 1s ease', 
    },
    '& .slick-slide:not(.slick-current)': {
      transform: 'scale(0.8)',
    },
  },
}));

const svg = require("../../../images/shadowed-logo.svg");
const imageFomina = require("../../../images/fomina.jpg");

function SampleNextArrow(props) {
  const classes = useStyles({});
  const { className, style, onClick } = props;
  return (
  <div
    className={classes.right}
    onClick={onClick}
  >
    <KeyboardArrowRight style={{
      position: 'absolute',
      top: 88,
      color: '#fff'
    }} />
  </div>
  );
}

function SamplePrevArrow(props) {
  const classes = useStyles({});
  const { className, style, onClick } = props;
  return (
  <div
    className={classes.left}
    onClick={onClick}
  >
    <KeyboardArrowLeft style={{
      position: 'absolute',
      top: 88,
      color: '#fff'
    }} />
  </div>
  );
}

export const ScreenFive = ({ ...props }) => {
  const classes = useStyles({});
  // const theme = useTheme();
  // const xsDown = useMediaQuery(theme.breakpoints.down('xs'));

  const settings = {
    infinite: true,
    // centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    variableWidth: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const reviewsFoto = [
  {
    _id: "a",
    avatarSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFJ-AxzLn3Xo_vQmKtpgcs7F2OE5zgToohR-Aom5e0avIulO_LA',
    altAvatar: "avatar teacher",
  },
  {
    _id: "b",
    avatarSrc: 'https://www.girlup.org/wp-content/uploads/2018/06/girl-up-hero-group-1400x785.jpg',
    altAvatar: "avatar teacher",
  },
  {
    _id: "c",
    avatarSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJ_-6P55d7DGsZ4cAK37VRzd_SxOe2BQUsW9LECypQIfHpVwQQg',
    altAvatar: "avatar teacher",
  },
  ];

  return (
    <>
      <Hidden xsDown>
        <Container smSize={20} mdSize={80}>
          <Typography variant="h3" component="h2">
            Отзывы о нас
          </Typography>
        </Container>
        <Spacing size={25} />
        <div style={{
          height: 3,
          position: 'relative',
          backgroundColor: '#ff0000',
          zIndex: 333
        }}>
          <div
            className={classes.slickSlider}
            style={{
              position: 'absolute',
              width: '80%',
              height: 300,
              left: '10%',
              top: -150,
            }}
          >    
            <Slider {...settings}>
              {reviewsFoto.map(oneReviewFoto => (
              <div
                key={oneReviewFoto._id}
              >
                <ReviewFoto {...oneReviewFoto} />
              </div>
              ))}
            </Slider>
          </div>
          <Grid container justify="center" alignItems="center" style={{
            position: 'absolute',
            width: '80%',
            height: 560,
            left: '20%',
            top: -300
          }}>
            <Grid item xs={6} sm={6} md={4} lg={3} style={{}}>
              <ReviewText
                name='Эмилия Зотова'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac dignissim ex, sit amet efficitur orci. In ut risus non nisi commodo ultrices. Ut tortor turpis, suscipit vel leo ac, tincidunt posuere felis.'
                href='https://styleschool.ru/style4make'
                color= "inherit"
                course= "Стилистика для визажистов"
                date= "02.11"
              />
            </Grid>
          </Grid>
        </div>
      <Footer paddingTop={200} />
    </Hidden>
    {/* <Hidden smUp /> */}
  </>
  );
};
