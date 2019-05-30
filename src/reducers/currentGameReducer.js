import { RESET_GAME, SELECT_LETTER, SET_WORD } from '../actionTypes';

const defaultState = {
  word: null,
  wrongLetters: [],
  correctLetters: [],
  numberOfMistakes: 0,
};

const currentGameReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RESET_GAME:
      return defaultState;

    case SELECT_LETTER: {
      const wrongLetters = Object.assign([], state.wrongLetters);
      const correctLetters = Object.assign([], state.correctLetters);
      if (state.word.includes(action.letter)) {
        correctLetters.push(action.letter);
      } else {
        wrongLetters.push(action.letter);
      }
      return Object.assign({}, state, { wrongLetters, correctLetters });
    }

    case SET_WORD:
      return Object.assign({}, state, { word: action.word });

    default: return state;
  }
};

export default currentGameReducer;
