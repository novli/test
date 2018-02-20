import { createActions, handleActions } from 'redux-actions';

import { fetchCommentsByPageNumber } from 'API/comments';

const initialState = {
};

export const { api: { comments: { getPage: commentsGetPage } } } = createActions({
  API: {
    COMMENTS: {
      GET_PAGE: page => fetchCommentsByPageNumber(page),
    },
  },
});

export default handleActions({
}, initialState);

