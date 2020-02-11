import React, { Component } from 'react';

// import components


class Question extends Component {
  
  render() {
    return (
      <div className ="question">
        <h1>{this.props.qText}</h1>
        
      </div>
    );
  }
}

export default Question;