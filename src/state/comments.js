import { createActions, handleActions } from 'redux-actions';

const initialState = {
  world: 'world',
  number: 0,
};

export const {
  comments: { countNumber },
} = createActions({
  COMMENTS: {
    COUNT_NUMBER: number => number,
  },
});

export default handleActions({
  [countNumber](state, { payload: number }) {
    return {
      ...state,
      number: state.number + number,
    };
  },
}, initialState);

