import { combineReducers } from 'redux';
import currentGameReducer from './currentGameReducer';
import scoreboardReducer from './scoreboardReducer';

const rootReducer = combineReducers({
  currentGameState: currentGameReducer,
  scoreboardState: scoreboardReducer,
});

export default rootReducer;
