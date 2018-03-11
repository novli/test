import { createActions, handleActions } from 'redux-actions';
import { normalize } from 'normalizr';

import CommentsWorker from 'workers/comments.worker';
import { commentsSchema } from 'schemas/comments';
import { commentsGetPage } from './api';

const { normalizeComments } = new CommentsWorker();

const initialState = {
  page: 0,
  commentsList: [],
  loading: false,
  comments: {
  },
};

export const {
  comments: {
    loadListWithFirstPage: loadListWithFirstPageAsync,
    updateListWithNextPage: updateListWithNextPageAsync,
  },
} = createActions({
  COMMENTS: {
    LOAD_LIST_WITH_FIRST_PAGE: async dispatch => {
      const { value } = await dispatch(commentsGetPage(0));
      const data = await normalizeComments(value.data);
      return {
        data,
      };
    },
    UPDATE_LIST_WITH_NEXT_PAGE: async (dispatch, page) => {
      const nextPage = page + 1;
      const { value } = await dispatch(commentsGetPage(nextPage));
      const data = normalize(value.data, commentsSchema);
      return {
        data,
        nextPage,
      };
    },
  },
});

export const loadListWithFirstPage = () => dispatch =>
  dispatch(loadListWithFirstPageAsync(dispatch));

export const updateListWithNextPage = page => dispatch =>
  dispatch(updateListWithNextPageAsync(dispatch, page));

export default handleActions({
  [`${loadListWithFirstPageAsync}_PENDING`](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [`${loadListWithFirstPageAsync}_FULFILLED`](state, { payload: { data } }) {
    return {
      ...state,
      commentsList: data.result,
      comments: {
        ...state.comments,
        ...data.entities.comments,
      },
      loading: false,
    };
  },
  [`${updateListWithNextPageAsync}_PENDING`](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [`${updateListWithNextPageAsync}_FULFILLED`](state, { payload: { data, nextPage: page } }) {
    return {
      ...state,
      commentsList: [...state.commentsList, ...data.result],
      comments: {
        ...state.comments,
        ...data.entities.comments,
      },
      page,
      loading: false,
    };
  },
}, initialState);
