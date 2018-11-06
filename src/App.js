import React, { Component } from 'react';
import './App.scss';
import Card from './Card.js';
import Scoreboard from './Scoreboard.js'
import Question from './Question.js'
import Progress from './Progress.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions:[]
    } 
  }

  componentDidMount = () => {
    fetch('https://memoize-datasets.herokuapp.com/api/v1/usefuljavascript')
    .then(response => response.json())
    .then(result => {
      this.setState({
        questions:result.questions
      });
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1 className='title'>
            Choose Your Method
         </h1>
        </header>
        <Scoreboard/>
        <Card/>
        <Progress/>
      </div>
    );
  }
}

export default App;
