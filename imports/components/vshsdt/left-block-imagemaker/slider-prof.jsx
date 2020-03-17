import React from 'react';

import {
  Tab,
  Tabs  
} from '@material-ui/core';

const items = [
  {
    id: 1,
    text: `Lorem Ipsum is simply dummy text of 
    the printing and typesetting industry. Lorem Ipsum 
    has been the industry's standard dummy text ever since 
    the 1500s, when an unknown printer took a galley of type 
    and scrambled it to make a type specimen book.`,
    src: 'https://ca-times.brightspotcdn.com/dims4/default/30ef4c6/2147483647/strip/true/crop/5302x3608+0+0/resize/840x572!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F26%2Fae%2F0b42f7914920a706e1f0e72dc94f%2Fana-de-almeida-amaral-gold-award-girl-scout.jpg'
  },
  {
    id: 2,
    text: `It has survived not only five centuries, 
    but also the leap into electronic typesetting, 
    remaining essentially unchanged.`,
    src: 'https://cdn.britannica.com/94/137694-050-48EAF4AA/Edna-OBrien-2009.jpg'
  },
  {
    id: 3,
    text: `It was popularised in the 1960s with the release of Letraset sheets 
    containing Lorem Ipsum passages, and more recently with desktop publishing 
    software like Aldus PageMaker including versions of Lorem Ipsum.`,
    src: 'http://static-16.sinclairstoryline.com/resources/media/c8ba8b63-b88c-45fa-ab1e-5628395bb483-large16x9_kaitlinn.jpg?1551478508286'
  }
]

export const SliderProf = () => {
  return(
    <div style={{
      position: 'relative'
    }}>
      <div style={{
        position: 'relative',
        top: 0,
        left: 0
      }}>
        {items.map((item, i) => (
          <div key={item.id}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  )
}