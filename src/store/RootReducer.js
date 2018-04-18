import { combineReducers } from 'redux';
import createMeasureReducer from './CreateMeasure/reducer.js'

const rootReducer = combineReducers({
  createReducer: createMeasureReducer,
  // More reducers if there are
  // can go here
});

export default rootReducer;