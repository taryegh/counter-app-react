import React from "react";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: Math.floor(Math.random() * 6073),
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDouble = this.handleDouble.bind(this);
    this.handleHalf = this.handleHalf.bind(this);
  }

  handleAdd() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleDouble() {
    this.setState(prevState => {
      return {
        count: prevState.count * 2
      };
    });
  }

  handleHalf() {
    this.setState(prevState => {
      return {
        count: prevState.count / 2
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button className="add" onClick={this.handleAdd}>
          Add
        </button>
        <button className="double" onClick={this.handleDouble}>
          Double
        </button>
        <button className="half" onClick={this.handleHalf}>
          Half
        </button>
        <h3 className="text">Speculate with the given number to have 1.</h3>
      </div>
    );
  }
}

export default App;
