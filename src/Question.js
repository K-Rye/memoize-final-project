import React, { Component } from 'react';
import './question.scss';

export default function Question() {
    return (
      <li className='question-card'>
        <h1 className='option question-question'>
          Question:
        </h1>
        <h2 className='option option-a'>
          a:
        </h2>
        <h2 className='option option-b'>
          b:
        </h2>
        <h2 className='option option-c'>
          c:
        </h2>
        <h3 className='option help'>
          Help
        </h3> 
        <button className='qustion-submit-button'>
          Submit
        </button>
      </li>
  );
}