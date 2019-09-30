import { makeStyles, Typography, Hidden } from "@material-ui/core";

import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";

import {Calendar} from "./calendar";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

import { Spacing } from "../spacing";
import {Container} from "../container";

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
  left: {
    position: 'absolute',
    zIndex: 99999,
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    '& div:nth-child(1)': {
      width: 100,
      height: 100,
      background: '#fff',
      transition: 'all 1s ease',
      boxShadow: '0 0 0 0 #777',
    },
    '&:hover div:nth-child(1)': {
      boxShadow: '18px 0 23px -16px #777',
    },
    '& div:nth-child(2)': {
      top: '18%',
      left: '26%',
      width: '71%',
      height: '70%',
      zIndex: -1,
      position: 'absolute',
      background: 'transparent',
      transition: 'all 1s ease',
      transform: 'rotate(9deg)',
      boxShadow: '0 0 0 0 #777',
    },
    '&:hover div:nth-child(2)': {
      boxShadow: '0 15px 10px #777',
    },
  },
  right: {
    position: 'absolute',
    zIndex: 99999,
    top: 0,
    right: 0,
    width: 100,
    height: 100,
    '& div:nth-child(1)': {
      width: 100,
      height: 100,
      background: '#fff',
      transition: 'all 1s ease',
      boxShadow: '0 0 0 0 #777',
    },
    '&:hover div:nth-child(1)': {
      boxShadow: '-18px 0 23px -16px #777',
    },
    '& div:nth-child(2)': {
      top: '18%',
      right: '26%',
      width: '71%',
      height: '70%',
      zIndex: -1,
      position: 'absolute',
      background: 'transparent',
      transition: 'all 1s ease',
      transform: 'rotate(-9deg)',
      boxShadow: '0 0 0 0 #777',
    },
    '&:hover div:nth-child(2)': {
      boxShadow: '0 15px 10px #777',
    },
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
      <div>
        <KeyboardArrowRight style={{
          position: 'absolute',
          top: 40,
          left: 40
        }} />
      </div>
      <div/>
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
      <div>
        <KeyboardArrowLeft style={{
          position: 'absolute',
          top: 40,
          left: 40
        }} />
      </div>
      <div/>
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
    className: "center",
    centerPadding: 60,
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
        <Container mdSize={30}>
          <Typography variant="h3" component="h2">
            Курсы
          </Typography>
        </Container>
        <Spacing size={5} />
        {/* <Slider {...settingsOne}>
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
        </Slider> */}
        <Calendar />
        <Spacing size={5} />
        <Container mdSize={30}>
          <Typography variant="h3" component="h2">
            События
          </Typography>
        </Container>
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
