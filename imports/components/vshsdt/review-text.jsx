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
        height: 550,
        boxShadow: '0 0 5px'
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
          }}> 
          {text}
        </div>
        <div style={{
          position: 'absolute',
          bottom: 0,
          right: 0
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
