import React, { Component } from 'react';
import './App.scss';
import Card from './Card.js';
import DrawCard from './DrawCard.js'
// import Scoreboard from './Scoreboard.js'
// import Question from './Question.js'
// import Progress from './Progress.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentCard:[],
      answer:[]
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
      this.setState({
        questions:result.usefulJavascript,
        currentCard,
        answer:answers[0]
      });
    })
    .catch(error => console.log(error))
  }

  // componentDidMount() {
  //   const currentCards = this.state.questions;
  //   this.setState({
  //     questions: currentCards,
  //     currentCard: this.getRandomCard(currentCards)
  //   })
  // }

  getRandomCard(currentCards) {
    const card = currentCards[Math.floor(Math.random()*currentCards.length)];
    return card;
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1 className='title'>
            Choose Your Method
         </h1>
        </header>
        <div className='card-style'>
          <Card question={this.state.currentCard.question}
                answer={this.state.answer} />
        </div>
        <div className='draw-button'>
       
        </div>
      </div>
    );
  }
}




export default App;
