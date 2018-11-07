
////////////APP////////////////////
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//          <h1 className='title'>
//             Choose Your Method
//          </h1>
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

      // <div className="App">
      //   <header className="App-header">
      //    <h1 className='title'>
      //       Choose Your Method
      //    </h1>
      //   </header>


////////////CARD////////////////////
    //   <ul>
    //     {
    //       this.props.usefulJavascript.map(item => {
    //         return <li>{item}</li>
    //       })
    //     }
    //   </ul>
    // ); //end return


  //   class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     questions:[],
  //     correct:[]
  //   } 
  // }

  // componentDidMount = () => {
  //   fetch('http://memoize-datasets.herokuapp.com/api/v1/usefuljavascript')
  //   .then(response => response.json())
  //   .then(result => {
  //     this.setState({
  //       questions:result.usefulJavascript,
  //       correct:result.usefulJavascript
  //     });
  //   })
  //   .catch(error => console.log(error))
  // }

  // buildCard = (questions) => {
  //   questions.map(method => {
  //     console.log(method)
  //     return method.name
  //   })
  // }  

  // chooseAnswer = (e) => {
  //   if e.target === this.state.props.correct
  //     addClass transition to flip Card
  //   return 'Correct!'
  // }