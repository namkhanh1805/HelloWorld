import React, { Component } from 'react';
import ChampionContainer from '../containers/list-champion'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
              <ChampionContainer />
        </p>
      </div>
    );
  }
}

export default App;
