// import React, { Component } from 'react';
// import './question.scss';

// export default class Question extends Component {
//   conststructor(props) { 
//     super(props);
//     this.state = {
//       clicked: false
//     }
//   }

//     handleState = () => {
//     this.props.chooseAnswer(this.props.answer)

//     this.setState({
//       clicked: true
//     })
//   }

//     return (
//       <div className='question-card'>
//         <li className='faces front'>
//           <h1 className='option question-question'>Question: </h1>
//           <h2 className='option option-a'>a:</h2>
//           <h2 className='option option-b'>b:</h2>
//           <h2 className='option option-c'>c:</h2>
//           <h3 className='option help'>Help</h3> 
//           <button className='qustion-submit-button'>Submit</button>
//         </li>
//         <li className='faces back'>
//           <h1 className='option question-answer'>Answer:</h1>
//           <button className='qustion-submit-button'>Next</button>
//         </li>
//       </div>
//   );
//  } 
// }