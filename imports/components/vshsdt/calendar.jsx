import { makeStyles, Typography, Hidden, Grid } from "@material-ui/core";

import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

import { Spacing } from "../spacing";
import {Container} from "../container";

import { Timeline } from "./timeline";
import {Filter} from "./filter";
import { relative } from "path";

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
  wrap: {
    flexWrap: 'nowrap'
  }
  
}));

const svg = require("../../../images/shadowed-logo.svg");
const imageFomina = require("../../../images/fomina.jpg");
const imageDiv = require("../../../images/div.png");
const time = "18:00"; //moment().fromNow();
const date = "02.11";

export const Calendar = ({ ...props }) => {
  const classes = useStyles({});
  // const theme = useTheme();
  // const xsDown = useMediaQuery(theme.breakpoints.down('xs'));

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
    width: 2
  },
  {
    _id: "b",
    title: "С приветом по планетам",
    time: "12:00",
    date: "02.11",
    href: "/google.com",
    bgColor: "rgba(22, 61, 91, 0.35)",
    color: "inherit",
    event: "лекция",
    width: 4
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
    width: 3
  },
  {
    _id: "d",
    avatarSrc: imageFomina,
    title: "Весь мир театр",
    time: "12:00",
    date: "02.11",
    href: "/google.com",
    bgColor: "rgba(22, 61, 91, 0.35)",
    altAvatar: "avatar teacher",
    color: "inherit",
    event: "мастер-класс",
    width: 2
  },
  {
    _id: "e",
    title: "С приветом по планетам",
    time: "12:00",
    date: "02.11",
    href: "/google.com",
    bgColor: "rgba(22, 61, 91, 0.35)",
    color: "inherit",
    event: "лекция",
    width: 3
  },
  ];

  const events2 = [

    {
      _id: "a",
      bgImg: imageDiv,
      title: "Быть или не быть",
      time: "12:00",
      date: "02.11",
      href: "/google.com",
      altImg: "course",
      color: "inherit",
      event: "курс",
      width: 4
    },
    {
      _id: "b",
      avatarSrc: imageFomina,
      title: "Весь мир театр",
      time: "12:00",
      date: "02.11",
      href: "/google.com",
      bgColor: "rgba(22, 61, 91, 0.35)",
      altAvatar: "avatar teacher",
      color: "inherit",
      event: "мастер-класс",
      width: 3
    },
    {
      _id: "c",
      title: "С приветом по планетам",
      time: "12:00",
      date: "02.11",
      href: "/google.com",
      bgColor: "rgba(22, 61, 91, 0.35)",
      color: "inherit",
      event: "лекция",
      width: 2
    },
    {
      _id: "d",
      avatarSrc: imageFomina,
      title: "Весь мир театр",
      time: "12:00",
      date: "02.11",
      href: "/google.com",
      bgColor: "rgba(22, 61, 91, 0.35)",
      altAvatar: "avatar teacher",
      color: "inherit",
      event: "мастер-класс",
      width: 4
    },
    {
      _id: "e",
      title: "С приветом по планетам",
      time: "12:00",
      date: "02.11",
      href: "/google.com",
      bgColor: "rgba(22, 61, 91, 0.35)",
      color: "inherit",
      event: "лекция",
      width: 2
    },
    ];

  return (
  <>
    <Hidden xsDown>
    <Spacing size={5} />
    <div style={{
      position: 'relative',
    }}>
      <Grid container justify="flex-start" alignItems="center" alignContent
        classes={{root: classes.wrap}}
      >
        {events.map(oneEvent => (
        <Grid item 
        // style={{ width: `${oneEvent.width}%` }}
          xs={oneEvent.width}
          key={oneEvent._id}
        >
          <div style={{
            width: '100%',
            height: '100%',
            position: 'relative'
          }}>
            <Timeline {...oneEvent} />
            <Filter {...oneEvent} />  
          </div>
        </Grid>
        ))}  
      </Grid>
      <Spacing size={1} />
      <Grid container justify="flex-start" alignItems="center"
        classes={{root: classes.wrap}}
      >
        {events2.map(oneEvent => (
          <Grid item xs={oneEvent.width}
            key={oneEvent._id}
          >
            <div style={{
              width: '100%',
              height: '100%',
              position: 'relative'
            }}>
              <Timeline {...oneEvent} />
              <Filter {...oneEvent} />
            </div>
          </Grid>
        ))} 
      </Grid>
      <div style={{
        position: 'absolute',
        top:-10,
        left: '10%',
        width: 3,
        height: 225,
        backgroundColor: 'red'
      }}>
      </div>
    </div>
    </Hidden>
    <Hidden smUp />
  </>
  );
};

{/* <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '30%',
              height: '100',
              filter: 'sepia(50%)',
              overflow: 'hidden',
            }}>
              <div style={{
                width: '100%',
                height: '100%'
              }}>
                <Timeline {...oneEvent} />
              </div>
            </div> */}
