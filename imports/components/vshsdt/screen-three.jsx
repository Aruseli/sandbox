import { makeStyles, Typography, Hidden } from "@material-ui/core";

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
  }
}));

const svg = require("../../../images/shadowed-logo.svg");
const imageFomina = require("../../../images/fomina.jpg");
const imageDiv = require("../../../images/div.png");
const time = "18:00"; //moment().fromNow();
const date = "02.11";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export const ScreenThree = ({ ...props }) => {
  const classes = useStyles({});
  // const theme = useTheme();
  // const xsDown = useMediaQuery(theme.breakpoints.down('xs'));

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const events = [
    {
      _id: "a",
      avatarSrc: { imageFomina },
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
      bgImg: { imageDiv },
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
        <Slider {...settings}>
          <div
            style={{
              width: 100
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(22, 61, 91, 0.35)",
                height: 100
              }}
            />
          </div>
          <div
            style={{
              width: 300
            }}
          >
            <div
              style={{
                height: 100,
                backgroundColor: "rgba(22, 61, 191, 0.35)",
                position: "relative"
              }}
            >
              <img
                alt="avatar teacher"
                src={imageFomina}
                style={{
                  position: "absolute",
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  top: 10,
                  left: 10
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 5,
                  right: 5
                }}
              >
                <span>Весь мир театр</span>
                <p
                  style={{
                    fontSize: 11
                  }}
                >
                  мастер-класс
                </p>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 5,
                  fontSize: 11
                }}
              >
                <p>
                  {time}&ensp;{date}
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              width: 200
            }}
          >
            <div
              style={{
                height: 100,
                backgroundColor: "rgba(22, 61, 191, 0.85)"
              }}
            />
          </div>
          <div
            style={{
              width: 100
            }}
          >
            <div
              style={{
                height: 100,
                backgroundColor: "rgba(22, 61, 91, 0.35)"
              }}
            />
          </div>
          <div
            style={{
              width: 300
            }}
          >
            <div
              style={{
                height: 100,
                backgroundColor: "rgba(22, 61, 191, 0.35)",
                overflowY: "hidden"
              }}
            >
              <img
                src={imageDiv}
                alt="course"
                style={{
                  width: "100%"
                }}
              />
            </div>
          </div>
          <div
            style={{
              width: 200
            }}
          >
            <div
              style={{
                height: 100,
                backgroundColor: "rgba(22, 61, 191, 0.85)"
              }}
            />
          </div>
          <div
            style={{
              width: 200
            }}
          >
            <div
              style={{
                height: 100,
                backgroundColor: "rgba(22, 61, 191, 0.35)"
              }}
            />
          </div>
          <div
            style={{
              width: 300
            }}
          >
            <div
              style={{
                height: 100,
                backgroundColor: "rgba(22, 61, 191, 0.35)",
                overflowY: "hidden"
              }}
            >
              <img
                src={imageDiv}
                alt="course"
                style={{
                  width: "100%"
                }}
              />
            </div>
          </div>
        </Slider>
        <Spacing size={5} />
        <Slider {...settings}>
          {events.map(oneEvent => (
            <div
              key={oneEvent._id}
              style={{
                width: oneEvent.width
              }}
            >
              <Timeline {...oneEvent} />
            </div>
          ))}
        </Slider>
      </Hidden>
      <Hidden smUp />
    </>
  );
};
