import React from 'react';

export default function Post({username, photo, date, title, content}) {
  
  return (
    <div className='post'>
        <span>{photo} {username} · <span className='opacity-60'>{date}</span></span>
        <h2 className='mt-1 mb-2 display-7'>{title}</h2>
        <p>{content}</p>
    </div>
  )
}
