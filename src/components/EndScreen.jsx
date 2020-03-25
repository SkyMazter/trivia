import '../css/App.css';
import React, {Component} from 'react';


class EndScreen extends Component {
    render(){
       return(
           <div class="EndScreen">
         <h1>Game Over!</h1>
         <img src="https://38.media.tumblr.com/178d2fc897b08e95dc78de9ca0098147/tumblr_nl0k1nP51S1rp0vkjo1_500.gif"></img>
          <h1>You got {this.props.points} points</h1>
         </div>
       );
    }
}
export default EndScreen;