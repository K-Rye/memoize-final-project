import React, { Component } from 'react';
import './progress.scss'

export default function Progress() {
    return (
      <div className='score-board'>
        <h1 className='progress-tracker proficient'>
          Proficiet:
        </h1>
        <h1 className='progress-tracker need-work'>
          Need Work:
        </h1>
      </div>
  );
}
