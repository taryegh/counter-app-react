import React from "react";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleDouble = () => {
    this.setState(prevState => {
      return {
        count: prevState.count * 2
      };
    });
  };

  handleHalf = () => {
    this.setState(prevState => {
      return {
        count: prevState.count / 2
      };
    });
  };

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
      </div>
    );
  }
}

export default App;
