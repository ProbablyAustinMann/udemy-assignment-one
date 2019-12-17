import React from 'react';
import './User.css';

const user = (props) => {
  return (
    <div className='User'>
        <p>{props.name}</p>
        <input type='text' onChange={props.changed} value={props.name}/>
        <p>{props.comment}</p>
        <input type='text' onChange={props.changed} value={props.comment}/>
    </div>
  )
};

export default user;
