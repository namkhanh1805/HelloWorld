import React, { Component } from 'react';
import {connect} from 'react-redux';
class ChampionDetail extends Component {
  render(){
    return(<div>
      <p>{this.props.actionChampion.name}</p>
    </div>);

  }
}
function mapStateToProps(state) {
  return {
    actionChampion:state.actionChampion
  };
}

let ChampionDetailContainer=connect(mapStateToProps)(ChampionDetail);

export default ChampionDetailContainer;
