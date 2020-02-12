import React from 'react';
import data from'../testData/questions.js'
import '../css/App.css';
import {buildFirebase} from '../clients/firebase.js';

// import components
import Questions from './Question';
import Answer from './Answer';
class App extends React.Component {

constructor(){
  super()
  this.state={
    questions: []
  }
};
componentDidMount(){
  let database = buildFirebase();
  let questions;
  let databaseRef = database.ref("/questions");
  console.log(this)
  databaseRef.once("value").then(function(data){
     questions = Object.values(data.val());
    console.log(questions);
    console.log(this)
    this.setState({questions})

  }); 
}
  render() {

    if(!this.state.questions.length){
      return null
    }
    let i = 0;
    const { questions } = this.state;
    let question = questions[i].question_text;
    let answer = questions[i].correct_choice_index;
    
    
    return (
      <div className="app">
        <h2>Riddle.It</h2>
        
        <Questions qText ={question}/>
        <div className = "ansHolder">
          {data.questions[i].choices.map((element,x) => {
            let correctAns =  (x === answer)
          return  <Answer ansText = {element} correctAns = {correctAns}/>

          })}
        </div>
        
        
      </div>
    );
  }
}

export default App;