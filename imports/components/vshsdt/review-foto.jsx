import React from 'react';

export const ReviewFoto = ({
  avatarSrc = null,
  altAvatar,
}) => {
  return (
    <div style={{
      paddingLeft: 5,
      paddingRight: 5,
      height: 300,
      boxSizing: 'border-box',
    }}>
      <img
        alt={altAvatar}
        src={avatarSrc}
        style={{
          height: '100%'
        }}
      />
    </div>
  );
};
