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
      <div style={{
        paddingLeft: 5,
        paddingRight: 5,
        width: width || 150,
        boxSizing: 'border-box',
      }}>
        <div
          style={{
            height: 100,
            width: '100%',
            backgroundColor: bgColor || 'transparent',
            position: 'relative',
            overflow: 'hidden',
            color,
          }}>
          {bgImg ? (
            <div style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            }}>
              <img
                src={bgImg}
                style={{
                  width: '100%',
                }}
                alt={altImg}
              />
            </div>
          ) : null }
          {avatarSrc ? (
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
          ) : null}
          <div
            style={{
              position: 'absolute',
              top: 5,
              right: 10,
              textAlign: 'right'
            }}>
            {title ?
            <span>{title}</span> :
            null
            }
            {event ? 
            <div
              style={{
                fontSize: 11,
              }}>
              {event}
            </div> :
            null
            }
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 10,
              fontSize: 11,
            }}>
            <p>
              {time}&ensp;{date}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
