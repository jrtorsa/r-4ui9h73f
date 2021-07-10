import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    chain: ''
  }
 
  handleChange = (e) => {
    this.setState({
      chain: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" value={this.state.chain} onChange={this.handleChange} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.chain}</p>
      </div>
    );
  }
}

export default App;
