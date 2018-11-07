import React, { Component } from 'react';
import './card.scss';


export default function Card(props) {
  return (
  <div className='card-continer'>
    <div className='card'>
      <div className='front'>
        <div className='question'>{props.question}</div>
      </div>
      <div className='back'>
        <div className='option answer-a'>A:  {props.answer1}</div>
        <div className='option answer-b'>B:  {props.answer2}</div>
        <div className='option answer-c'>C:  {props.answer3}</div>
        <div className='hint-link'><a href={props.hint}>Hint</a></div>

      </div>
    </div>
  </div>
  )
}



