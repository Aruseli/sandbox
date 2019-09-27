import Link from 'next/link';

import React from 'react';

export const ReviewText = ({
  name,
  date,
  href,
  course,
  text,
  color
}) => {
  return (
    <>
      <div style={{
        backgroundColor: '#fff',
        position: 'relative',
        padding: 40,
        height: '100%',
        boxSizing: 'border-box',
        boxShadow: '0 0 1px'
      }}>
        <div style={{
          textAlign: 'left',
          color,
          fontSize: 18,
          fontWeight: 700,
          paddingBottom: 25
        }}>{name}</div>
        <div
          style={{
            textAlign: 'justify',
            color,
            lineHeight: 2,
            paddingBottom: 25
          }}> 
          {text}
        </div>
        <div style={{
        }}>
          <div style={{
            fontSize: 12,
            textAlign: 'right'
          }}>
            {date}
          </div>
          <div style={{
            fontSize: 16,
            textAlign: 'right'
          }}>
            <Link href={href}>{course}</Link><br/>
          </div>
        </div>
      </div>
    </>
  );
};
