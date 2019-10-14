import { makeStyles, Hidden, Grid } from "@material-ui/core";

import React from "react";

import '../../i18n';

import moment from "moment";

import { Spacing } from "../spacing";

import {FilteredCard} from "./filtered-card";
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

const events = [
  {
    _id: "a",
    avatarSrc: imageFomina,
    title: "Весь мир театр",
    time: moment().add(-3, 'days'),
    href: "/google.com",
    bgColor: "rgba(22, 61, 91, 0.35)",
    altAvatar: "avatar teacher",
    color: "inherit",
    event: "мастер-класс",
    width: 2,
    completed: 30
  },
  {
    _id: "b",
    title: "С приветом по планетам",
    time: moment().add(-5, 'days'),
    href: "/google.com",
    bgColor: "rgba(22, 61, 91, 0.35)",
    color: "inherit",
    event: "лекция",
    width: 4,
    completed: 50
  },
  {
    _id: "c",
    bgImg: imageDiv,
    title: "Быть или не быть",
    time: moment().add(-6, 'days'),
    href: "/google.com",
    altImg: "course",
    color: "inherit",
    event: "курс",
    width: 3,
    completed: 60
  },
  {
    _id: "d",
    avatarSrc: imageFomina,
    title: "Весь мир театр",
    time: moment().add(-2, 'days'),
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
    time: moment().add(-1, 'days'),
    href: "/google.com",
    bgColor: "rgba(22, 61, 91, 0.35)",
    color: "inherit",
    event: "лекция",
    width: 3,
    completed: 10
  },
];

const events2 = [
  {
    _id: "a",
    bgImg: imageDiv,
    title: "Быть или не быть",
    time: moment().add(-4, 'days'),
    href: "/google.com",
    altImg: "course",
    color: "inherit",
    event: "курс",
    width: 4,
    completed: 40
  },
  {
    _id: "b",
    avatarSrc: imageFomina,
    title: "Весь мир театр",
    time: moment().add(-2, 'days'),
    href: "/google.com",
    bgColor: "rgba(22, 61, 91, 0.35)",
    altAvatar: "avatar teacher",
    color: "inherit",
    event: "мастер-класс",
    width: 3,
    completed: 20
  },
  {
    _id: "c",
    title: "С приветом по планетам",
    time: moment().add(-6, 'days'),
    href: "/google.com",
    bgColor: "rgba(22, 61, 91, 0.35)",
    color: "inherit",
    event: "лекция",
    width: 2,
    completed: 60
  },
  {
    _id: "d",
    avatarSrc: imageFomina,
    title: "Весь мир театр",
    time: moment().add(3, 'days'),
    href: "/google.com",
    bgColor: "rgba(22, 61, 91, 0.35)",
    altAvatar: "avatar teacher",
    color: "inherit",
    event: "мастер-класс",
    width: 4,
  },
  {
    _id: "e",
    title: "С приветом по планетам",
    time: moment().add(-10, 'days'),
    href: "/google.com",
    bgColor: "rgba(22, 61, 91, 0.35)",
    color: "inherit",
    event: "лекция",
    width: 2,
    completed: 100
  },
];

export const Calendar = ({ ...props }) => {
  const classes = useStyles({});
  // const theme = useTheme();
  // const xsDown = useMediaQuery(theme.breakpoints.down('xs'));

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
          xs={oneEvent.width}
          key={oneEvent._id}
        >
          <FilteredCard {...oneEvent} />
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
            <FilteredCard {...oneEvent} />
          </Grid>
        ))} 
      </Grid>
      </div>
    </Hidden>
    <Hidden smUp />
  </>
  );
};
