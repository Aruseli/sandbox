import { makeStyles, Typography, Hidden } from "@material-ui/core";

import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

import { Spacing } from "../spacing";

import { ReviewFoto } from "./review-foto";
import { ReviewText } from "./review-text";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main
  },
  position: {
    [theme.breakpoints.between("md", "lg")]: {
      position: "relative",
      top: 100,
      right: 100
    },
    [theme.breakpoints.only("sm")]: {
      position: "relative",
      top: 30,
      right: 0
    }
  },
  left: {
    position: 'absolute',
    zIndex: 99999,
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    background: 'red',
      '&:hover': {
        zIndex: 1,
        left: 'auto',
        width: 100,
        maxWidth: 300,
        background: 'red',
        boxShadow: '0 15px 10px #777',
        transform: 'rotate(3deg)'
    }
  },
  right: {
    position: 'absolute',
    zIndex: 99999,
    top: 0,
    right: 0,
    width: 100,
    height: 100,
    background: 'red',
      '&:hover': {
      position: 'absolute',
      zIndex: 1,
      right: 0,
      width: 100,
      maxWidth: 300,
      background: 'red',
      boxShadow: '0 15px 10px #777',
      transform: 'rotate(-3deg)'
    }
  },
}));

const svg = require("../../../images/shadowed-logo.svg");
const imageFomina = require("../../../images/fomina.jpg");
const imageDiv = require("../../../images/div.png");
const date = "02.11";

function SampleNextArrow(props) {
  const classes = useStyles({});
  const { className, style, onClick } = props;
  return (
  <div
    className={classes.right}
    onClick={onClick}
  >
    <KeyboardArrowRight />
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
    <KeyboardArrowLeft />
  </div>
  );
}

export const ScreenFour = ({ ...props }) => {
  const classes = useStyles({});
  // const theme = useTheme();
  // const xsDown = useMediaQuery(theme.breakpoints.down('xs'));

  const settings = {
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
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
    // name: "Полина Афанасьева",
    // date: "02.11",
    // href: "https://styleschool.ru/profashion",
    altAvatar: "avatar teacher",
    // color: "inherit",
    // course: "Имидж-консультант",
  },
  {
    _id: "b",
    avatarSrc: 'https://www.girlup.org/wp-content/uploads/2018/06/girl-up-hero-group-1400x785.jpg',
    altAvatar: "avatar teacher",
    // name: "Светлана Полякова",
    // date: "02.11",
    // href: "/google.com",
    // color: "inherit",
    // course: "Базовый курс 'Сам себе стилист'"
  },
  {
    _id: "c",
    avatarSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJ_-6P55d7DGsZ4cAK37VRzd_SxOe2BQUsW9LECypQIfHpVwQQg',
    // name: "Эмилия Зотова",
    altAvatar: "avatar teacher",
    // date: "02.11",
    // href: "https://styleschool.ru/style4make",
    // color: "inherit",
    // course: "Стилистика для визажистов",
    // width: 300
  },
  ];

  return (
  <>
    <Hidden xsDown>
    <Typography variant="h4" component="h2">
      Отзывы о нас
    </Typography>
    <Spacing size={25} />
    <div style={{
      height: 3,
      position: 'relative',
      backgroundColor: '#ff0000'
    }}>
      <div style={{
        position: 'absolute',
        width: '80%',
        height: 300,
        left: '10%',
        top: -150
      }}>    
        <Slider {...settings}>
          {reviewsFoto.map(oneReviewFoto => (
          <div
            key={oneReviewFoto._id}
            style={{
            width: oneReviewFoto.width,
            }}
          >
            <ReviewFoto {...oneReviewFoto} />
          </div>
          ))}
        </Slider>
      </div>
      <div style={{
        position: 'absolute',
        width: '30%',
        height: 550,
        left: '40%',
        top: -275
      }}>
        <ReviewText
          name='Эмилия Зотова'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac dignissim ex, sit amet efficitur orci. In ut risus non nisi commodo ultrices. Ut tortor turpis, suscipit vel leo ac, tincidunt posuere felis.'
          href='https://styleschool.ru/style4make'
          color= "inherit"
          course= "Стилистика для визажистов"
          date= "02.11"
        />
      </div>
    </div>
    <Spacing size={15} />
    </Hidden>
    <Hidden smUp />
  </>
  );
};
