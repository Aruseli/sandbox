import { makeStyles, Typography, Hidden } from "@material-ui/core";

import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

import { Spacing } from "../spacing";

import { Timeline } from "./timeline";

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
  // box: {
  //   width: '70%',
  //   height: 200,
  //   background: '#F0F0F0',
  //   margin: '40px auto'
  // },
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
      '&:hover div': {  // или так '&:hover $div' но так не работает
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
const time = "18:00"; //moment().fromNow();
const date = "02.11";

function SampleNextArrow(props) {
  const classes = useStyles({});
  const { className, style, onClick } = props;
  return (
    <div
      className={classes.right}
      onClick={onClick}
    >
      <div />
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

export const ScreenThree = ({ ...props }) => {
  const classes = useStyles({});
  // const theme = useTheme();
  // const xsDown = useMediaQuery(theme.breakpoints.down('xs'));

  const settingsOne = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const settingsTwo = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const events = [
    {
      _id: "a",
      avatarSrc: imageFomina,
      title: "Весь мир театр",
      time: "12:00",
      date: "02.11",
      href: "/google.com",
      bgColor: "rgba(22, 61, 91, 0.35)",
      altAvatar: "avatar teacher",
      color: "inherit",
      event: "мастер-класс",
      width: 200
    },
    {
      _id: "b",
      title: "С приветом по планетам",
      time: "12:00",
      date: "02.11",
      href: "/google.com",
      bgColor: "rgba(22, 61, 91, 0.35)",
      color: "inherit",
      event: "лекция"
    },
    {
      _id: "c",
      bgImg: imageDiv,
      title: "Быть или не быть",
      time: "12:00",
      date: "02.11",
      href: "/google.com",
      altImg: "course",
      color: "inherit",
      event: "курс",
      width: 300
    }
  ];

  return (
    <>
      <Hidden xsDown>
        <Typography variant="h4" component="h2">
          Ближайшие курсы
        </Typography>
        <Spacing size={5} />
        <Slider {...settingsOne}>
          {events.map(oneEvent => (
            <div
              key={oneEvent._id}
              style={{
                width: oneEvent.width,
              }}
            >
              <Timeline {...oneEvent} />
            </div>
          ))}
        </Slider>
        <Spacing size={5} />
        <Typography variant="h4" component="h2">
          Прошедшие события
        </Typography>
        <Spacing size={5} />
        <Slider {...settingsTwo}>
          {events.map(oneEvent => (
            <div
              key={oneEvent._id}
              style={{
                width: oneEvent.width,
              }}
            >
              <Timeline {...oneEvent} />
            </div>
          ))}
        </Slider>
        <Spacing size={5} />
      </Hidden>
      <Hidden smUp />
    </>
  );
};
