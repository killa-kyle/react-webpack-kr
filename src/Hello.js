import React from 'react';
 
class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count: {this.state.count}
        </button>
      </div>
    );
  }
}
export default Hello;