import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    //the following block of codes is to initialize state, setting counter to zero//
        this.state = {counter:0  }

  }  // the following block of codes is for handling the start, pause and reset buttons//
        

  render() {
    return (
      <div>
       <button className="startbtn" onClick={beginCounter}> Start</button>
       <button className="pausebtn"> Pause</button>
       <button className="resetbtn"> Reset</button>
      
         
       
       
      </div>
    )
  }



}

    
  
  

export default App;
