import React, { Component } from 'react';
import ChampionContainer from '../containers/list-champion'
import ChampionDetailContainer from '../containers/detail-champion'
class Champion extends Component {
  render(){
    return(
      <div>
      <ChampionContainer />
      <hr/>
      <ChampionDetailContainer />
      </div>
    );
  }
}
export default Champion
