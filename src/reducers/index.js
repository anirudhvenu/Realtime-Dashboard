import { combineReducers } from 'redux'

// add reducers
import { firebaseReducer } from 'react-redux-firebase';
const reducers = combineReducers({
  firebase: firebaseReducer,

});

export default reducers;
