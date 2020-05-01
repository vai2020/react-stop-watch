import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    //the following block of codes is to initialize state, setting counter to zero//
        this.state = {counter:0}

  }  // the following block of codes is for handling the start, pause and reset buttons//
        // beginCounter=() => {this.setState({counter:this.state.counter+1})}
       
    //the following block of codes used setInterval method to set the timer to begin counting once the start button is pressed or onClick.  1000(milliseconds) is equal to one second//

        beginCounter=() => {      
            this.startCounter=setInterval(() => {
              this.setState({counter:this.state.counter+1})},1000
            )}
        
        //the following block of codes is to store the current state//
        
            pauseCounter=() => {
              // this.setState({})
            
            
              if(this.state.counter>=1) {  
                let pauseNum = this.state.counter
                return pauseNum

            }


        }


  render() {
    return (
      <div className="appBody">
        <h1>{this.state.counter}</h1>
        <h1>{this.state.pauseNum}</h1>
       <button className="startbtn" onClick={this.beginCounter}> Start</button>
       <button className="pausebtn" onClick={this.pauseCounter}> Pause</button>
       <button className="resetbtn" onClick={this.resetCounter}> Reset</button>
      
         
       
       
      </div>
    )
  }



}

    
  
  

export default App;


// citation: https://medium.com/@peterjd42/building-timers-in-react-stopwatch-and-countdown-bc06486560a2