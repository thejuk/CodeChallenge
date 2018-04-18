import { CREATE_MEASURE, } from './action';

const initialState = {measureName: ''};

export default function createMeasureReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case CREATE_MEASURE:
    let newState =Object.assign({}, state, {measureName:action.measureName});
    console.log(newState)
    return newState;
    default:
      return initialState;
  }
}