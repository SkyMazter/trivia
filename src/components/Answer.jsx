import React, {Component} from 'react';

class Answer extends Component {
    
   
    render(){
        return(
            <div className = "answer" onClick={this.props.click}>
                <p>{this.props.ansText}</p>
                
            </div>
        );
    }
}

export default Answer;