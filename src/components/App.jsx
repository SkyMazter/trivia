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
        Trivia!
        
        <Questions qText ={question}/>
        {data.questions[i].choices.map((element,x) => {
          let correctAns =  (x === answer)
        return  <Answer ansText = {element} correctAns = {correctAns}/>

        })}
        
      </div>
    );
  }
}

export default App;