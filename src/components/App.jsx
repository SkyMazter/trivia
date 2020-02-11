import React from 'react';
import data from'../testData/questions.js'
import '../css/App.css';

// import components
import Questions from './Question';
import Answer from './Answer';
class App extends React.Component {


  render() {
    
    let i = 0;
    
    let question = data.questions[i].question;
    let answer = data.questions[i].answer;
    
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