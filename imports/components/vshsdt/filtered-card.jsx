import React from 'react';

import {CalendarCard} from './calendar-card';

export const FilteredCard = ({
  avatarSrc = null,
  title,
  time,
  href,
  bgColor,
  bgImg,
  altImg,
  altAvatar,
  color,
  event,
  completed,
}) => {

  const progress = `${(100 / (completed / 100)) - (completed / (completed / 100)) + 100}%`;

  return (
    <div style={{
      width: '100%',
      height: 150,
      position: 'relative'}}>
      <CalendarCard 
        avatarSrc={avatarSrc}
        title={title}
        time={time}
        href={href}
        bgColor={bgColor}
        bgImg={bgImg}
        altImg={altImg}
        altAvatar={altAvatar}
        color={color}
        event={event}
      />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${completed}%`, 
        height: '100%',
        filter: 'grayscale(1)',
        overflow: 'hidden',
      }}>
        <div style={{
          width: progress,
          height: '100%',
        }}>
          <CalendarCard 
            avatarSrc={avatarSrc}
            title={title}
            time={time}
            href={href}
            bgColor={bgColor}
            bgImg={bgImg}
            altImg={altImg}
            altAvatar={altAvatar}
            color={color}
            event={event}
          />
        </div>
      </div>
    </div>
  );
};
