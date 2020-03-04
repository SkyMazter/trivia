import React, { Component } from 'react';

class Counter extends Component {
    constructor(){
        super()
        this.state={
          time:3,
        }
      };
      componentDidMount(){
         this.OneSecond()
      }
      OneSecond(){
        setTimeout(()=>{
            this.setState({
                time:this.state.time-1
            })
            if(this.state.time===0){
            
                this.props.endGame();
            }else{
            this.OneSecond();
            }
        },1000)
      }
render(){
    return(
        <h3>Time Left: {this.state.time}</h3>
    )
}
}

export default Counter;