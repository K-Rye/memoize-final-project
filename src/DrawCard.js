import React, { Component } from 'react';
import './drawcard.scss';

class DrawCard extends Component {
  constructor(props) {
    super(props);

  }

 newCard = () => {
    this.props.newCard();
 }

  render(props) {
    return(
      <div className='draw-card-button'>
        <button className='btn' onClick={this.newCard}>Next Card</button>
      </div>
    
    );
  }
}

export default DrawCard;






























