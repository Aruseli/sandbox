import { makeStyles, Typography, Hidden } from "@material-ui/core";

import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";

import '../../i18n';

import moment from "moment";

import {Calendar} from "./calendar";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

import { Spacing } from "../spacing";
import {Container} from "../container";

import { CalendarCard } from "./calendar-card";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main
  },
  left: {
    position: 'absolute',
    zIndex: 99999,
    top: 0,
    left: 0,
    width: 100,
    height: 150,
    '& div:nth-child(1)': {
      width: 100,
      height: 150,
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
    height: 150,
    '& div:nth-child(1)': {
      width: 100,
      height: 150,
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

const imageFomina = require("../../../images/fomina.jpg");
const imageDiv = require("../../../images/div.png");

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
          top: 55,
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
          top: 55,
          left: 40
        }} />
      </div>
      <div/>
    </div>
  );
}

const events = [
  {
    _id: "a",
    avatarSrc: imageFomina,
    title: "Весь мир театр",
    time: moment().add(1, 'days'),
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
    time: moment().add(5, 'days'),
    href: "/google.com",
    bgColor: "rgba(22, 61, 91, 0.35)",
    color: "inherit",
    event: "лекция"
  },
  {
    _id: "c",
    bgImg: imageDiv,
    title: "Быть или не быть",
    time: moment().add(10, 'days'),
    href: "/google.com",
    altImg: "course",
    color: "inherit",
    event: "курс",
    width: 300
  }
];

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

  return (
    <>
      <Hidden xsDown>
        <div style={{ height: '100vh' }}>
          <Container smSize={20} mdSize={80}>
            <Typography variant="h3" component="h2">
              Курсы
            </Typography>
          </Container>
          <Spacing size={5} />
          <Calendar />
          <Spacing size={5} />
          <Container smSize={20} mdSize={80}>
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
                <CalendarCard {...oneEvent} />
              </div>
            ))}
          </Slider>
        </div>
        {/* <Spacing size={5} /> */}
      </Hidden>
      {/* <Hidden smUp /> */}
    </>
  );
};
