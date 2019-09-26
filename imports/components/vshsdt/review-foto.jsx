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
            height: 250,
            width: 350,
            position: 'relative',
            overflow: 'hidden',
          }}>
            <img
              alt={altAvatar}
              src={avatarSrc}
              style={{
                width: '100%',
                height: '100%'
              }}
            />
        </div>
      </div>
  );
};
