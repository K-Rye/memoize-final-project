import React, { Component } from 'react';
import './App.scss';
import Card from './Card.js';
import DrawCard from './DrawCard.js';
// import Scoreboard from './Scoreboard.js'
// import Question from './Question.js'
// import Progress from './Progress.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentCard:[],
      answer:[],
      hint:[]
    } 
  }

  componentDidMount = () => {
    fetch('http://memoize-datasets.herokuapp.com/api/v1/usefuljavascript')
    .then(response => response.json())
    .then(result => {
      const currentCard = this.getRandomCard(result.usefulJavascript)
      const answerKeys = Object.keys(currentCard).filter(key => {
        if(key.includes('answer')) {
          return true
        }
      })
      const answers = answerKeys.map(key => {
        return currentCard[key]
      })

      const hintKey = Object.keys(currentCard).filter(key => {
        if(key.includes('more')) {
          return true
        }
      })
      const hint = hintKey.map(key => {
        return currentCard[key]
      })

      this.setState({
        questions:result.usefulJavascript,
        currentCard,
        answer:answers[0],
        hint:hint[0]
      });
    })
    .catch(error => console.log(error))
  }

  getRandomCard = (currentCards) => {
    const card = currentCards[Math.floor(Math.random()*currentCards.length)];
    return card;
  }

  updateCard = () => {
    this.getRandomCard()
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1 className='title'>Undefined...</h1>
         <h5 className='subtitle'>The JavaScript Memorization Game</h5>
        </header>
        <div className='card-style'>
          <Card question={this.state.currentCard.question}
                answer={this.state.answer} 
                hint={this.state.hint}/>
        </div>
        <div className='draw-button'>
          <DrawCard newCard={this.updateCard}/>
        </div>
      </div>
    );
  }
}




export default App;
