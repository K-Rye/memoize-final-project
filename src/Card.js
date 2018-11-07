import React, { Component } from 'react';
import './card.scss';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
    }
  }

  handleClick = () => {
    this.setState({
      addClass: true
    })
    console.log('clicking')
  }

  render(props) {
    return (
    <div className='card-continer'>
      <div className='card'>
        <div className='front'>
          <div className='question'>{this.props.question}</div>
        </div>
        <div className='back'>
          <div className='option answer-a'onClick={this.handleClick}>A:  {this.props.answer1}</div>
          <div className='option answer-b'onClick={this.handleClick}>B:  {this.props.answer2}</div>
          <div className='option answer-c'onClick={this.handleClick}>C:  {this.props.answer3}</div>
          <div className='hint-link'><a href={this.props.hint}>Hint</a></div>
        </div>
      </div>
    </div>
    )
  }
}



