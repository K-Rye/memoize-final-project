import React, { Component } from 'react';
// import Data from './Data.js'; 
import Question from './Question.js';
import './card.scss';

export default function Card(props) {
    return (
      <ul className='card-question'>
        {
            <Question/>
        
        }
      </ul>
      
    );
}
