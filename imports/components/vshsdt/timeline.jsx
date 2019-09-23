import Link from 'next/link';

import React from 'react';

export const Timeline = ({
  avatarSrc = null,
  title,
  time,
  date,
  href,
  bgColor,
  bgImg,
  altImg,
  altAvatar,
  color,
  event,
  width,
}) => {
  return (
    <Link href={href}>
      <div
        style={{
          width: width || 100,
          backgroundColor: bgColor || 'transparent',
          position: 'relative',
          overflow: 'hidden',
          color,
        }}>
        {bgImg ? (
          <>
            <img
              src={bgImg}
              style={{
                width: '100%',
                position: 'absolute',
                top: '-50%',
                marginTop: '50%',
              }}
              alt={altImg}
            />
            <div
              style={{
                position: 'absolute',
                top: 5,
                right: 5,
              }}>
              <span>{title}</span>
              <p
                style={{
                  fontSize: 11,
                }}>
                {event}
              </p>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 5,
                fontSize: 11,
              }}>
              <p>
                {time}&ensp;{date}
              </p>
            </div>
          </>
        ) : bgColor ? (
          <>
            <img
              alt={altAvatar}
              src={avatarSrc}
              style={{
                position: 'absolute',
                width: 50,
                height: 50,
                borderRadius: '50%',
                top: 10,
                left: 10,
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 5,
                right: 5,
              }}>
              <span>{title}</span>
              <p
                style={{
                  fontSize: 11,
                }}>
                {event}
              </p>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 5,
                fontSize: 11,
              }}>
              <p>
                {time}&ensp;{date}
              </p>
            </div>
          </>
        ) : null}
      </div>
    </Link>
  );
};
