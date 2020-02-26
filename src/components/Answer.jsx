import React, {Component} from 'react';

class Answer extends Component {
    handler = () =>{
       if(this.props.correctAns){
           alert("correct");
           this.props.click();
       }else{
           alert("wrong");
           this.props.click();
       }
       
    }
    render(){
        return(
            <div className = "answer" onClick={this.handler}>
                <p>{this.props.ansText}</p>
                
            </div>
        );
    }
}

export default Answer;