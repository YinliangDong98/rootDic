import { combineReducers } from 'redux';
import unexists from './unexists';
import now from './now';
import rootedi from './rootedi';
import wordedi from './wordedi';
import allbelong from './allbelong';
import allpart from './allpart';
// state中的每个部分对应一个reducer，reducer里的case对应的是对状态的操作
const rootReducer = combineReducers({
  now,
  unexists,
  rootedi,
  wordedi,
  allbelong,
  allpart,
});

export default rootReducer;
