import React from 'react';
 
class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 increment(){
    let oldstate = this.state;
    let newstate = oldstate;
    newstate.count++;
    this.setState(newstate);
 }
 decrement(){
  let oldstate = this.state;
  let newstate = oldstate;
  newstate.count--;
  this.setState(newstate);
 }
  render() {
    return (
      <div>
        <h1>Number of {this.props.name}:  {this.state.count}</h1>
        <button
          onClick={() =>            
            this.decrement()
          }
        >
          -
        </button>
        <button
          onClick={() =>            
            this.increment()
          }
        >
          +
        </button>
      </div>
    );
  }
}
export default Hello;