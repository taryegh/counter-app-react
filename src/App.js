import React from "react";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: Math.floor(Math.random() * 6073),
      num: Math.floor(20 * Math.random() + 1)
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDouble = this.handleDouble.bind(this);
    this.handleHalf = this.handleHalf.bind(this);
  }

  handleAdd() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
        
      };
    });
  }

  handleDouble() {
    this.setState(prevState => {
      return {
        count: prevState.count * 2,
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
          <h3 className='win-text'>{this.state.count === this.state.num ? "WIN !" : ""}</h3>
        <h3 className="text">Speculate with the given number to have <span style={{color: 'red'}}>{this.state.num}</span>.</h3>
      </div>
    );
  }
}

export default App;
