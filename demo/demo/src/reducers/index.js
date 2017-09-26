import champion from './champions-reducers';
import actionChampion from './action-champions-reducers'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  champion: champion,
  actionChampion:actionChampion
});

export default allReducers;
