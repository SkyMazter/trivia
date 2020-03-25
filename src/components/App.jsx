import React from 'react';
import '../css/App.css';
import {buildFirebase} from '../clients/firebase.js';

// import components
import Questions from './Question';
import Answer from './Answer';
import Counter from './Counter'; 
import EndScreen from './EndScreen';
class App extends React.Component {

constructor(){
  super()
  this.state={
    questions: [],
    i: 0,
    points:0,
    gameOver: false,
  }
};
componentDidMount(){

  let database = buildFirebase();
  let questions;
  let databaseRef = database.ref("/questions");

  databaseRef.once("value").then((data) =>{
    console.log({data})
     questions = Object.values(data.val());
    this.setState({questions}, ()=>{
      // we can give this.setState a callback function here, which allows us to log the state value after
      // we finish setting state - check it out in the console!

      console.log(this.state)
    })
  }); 
}
endGame(){
  this.setState({gameOver:true})
}
  render() {
if(this.state.gameOver){
  return <EndScreen points={this.state.points}></EndScreen>
}
    if(!this.state.questions.length){
      return null
    }

    const { questions } = this.state;
    let question = questions[this.state.i].question_text;
    let answer = questions[this.state.i].correct_choice_index;


    return (
      <div className="app">
        <h2>Riddle.It</h2>
        <h3>Points: {this.state.points}</h3>
        <Counter endGame={()=>{this.endGame()}}></Counter>
        <Questions qText ={question}/>
        <div className = "ansHolder">
          {this.state.questions[this.state.i].choices.map((element,x) => {
            let correctAns =  (x === answer)
          return  <Answer ansText = {element} correctAns = {correctAns} click={()=>{
            if(correctAns){
              this.setState({points:this.state.points+1})
            }else{
              this.setState({points:this.state.points-1})
              alert("Wrong");
            }
             this.setState({i: this.state.i + 1}, () => console.log(this.state.i))
            
          }}/>

          })}
        </div>


      </div>
    );
  }
}

export default App;