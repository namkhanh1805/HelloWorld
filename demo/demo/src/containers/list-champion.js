import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectChampion} from '../actions';
import {Flex,Box} from 'rebass';
class ChampionList extends Component {
  createChampionList(){
    return (
      this.props.champion.map(
        (data)=><p key={data.id} onClick={()=>this.props.selectChampion(data)}><Box p={2} w={[ 1, 1/2, 1/4 ]}>{data.name}</Box></p>)
      );
  }
  render(){
    return (
      <div>
        <Flex wrap mx={-2}>
            {this.createChampionList()}
        </Flex>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return{
    champion:state.champion
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectChampion},dispatch)
}

let ChampionContainer=connect(mapStateToProps,mapDispatchToProps)(ChampionList);

export default ChampionContainer;
