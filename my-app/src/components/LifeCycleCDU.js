import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCycleCDUChild';

export class LifeCycleCDU extends Component {
    constructor(props) {
        console.log("Constructor called");
      super(props)
    
      this.state = {
         greetings: "hello"
      }
    }

    updateGreeting = () => {
        this.setState(prevState => {
           return { greetings: prevState.greetings === "hello" ? "goodbye" : "hello"}
        })
    }

    componentDidUpdate() {
        console.log("Component updated!");
    }

  render() {
    console.log("Render called");
    return (
      <div>
        <h1>{this.state.greetings}</h1>
        <button onClick={this.updateGreeting}>Update Greeting</button>
        <LifeCyclesCDUChild parentGreeting={this.state.greetings}/>
      </div>
    )
  }
}

export default LifeCycleCDU