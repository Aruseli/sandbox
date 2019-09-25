import Link from 'next/link';

import React from 'react';

export const ReviewFoto = ({
  avatarSrc = null,
  altAvatar,
}) => {
  return (
    <div style={{
        paddingLeft: 5,
        paddingRight: 5,
        boxSizing: 'border-box',
      }}>
        <div
          style={{
            height: 300,
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
          }}>
          {avatarSrc ? (
            <img
              alt={altAvatar}
              src={avatarSrc}
              style={{
                width: '100%',
              }}
            />
          ) : null}
        </div>
      </div>
  );
};
