import React, { Component } from 'react';
import './card.scss';

export default function Card(props) {
  return (
  <div className='card-continer'>
    <div className='card'>
      <div className='front'>
        <div className='question'>Question:{props.question}</div>
      </div>
      <div className='back'>
        <div className='answer'>Answer:{props.answer}</div>
      </div>
    </div>
  </div>
  )
}



