import { INCREMENT_GAME_COUNT } from '../actionTypes';

const initialState = {
  numberOfGames: 0,
  wins: 0,
  loses: 0,
};

const scoreboardReducer = (state = initialState, action) => {
  if (action.type === INCREMENT_GAME_COUNT) {
    const { numberOfGames, wins, loses } = state;
    const { isAWinningGame } = action;

    return {
      numberOfGames: numberOfGames + 1,
      wins: isAWinningGame ? wins + 1 : wins,
      loses: isAWinningGame ? loses : loses + 1,
    };
  }

  return state;
};

export default scoreboardReducer;
