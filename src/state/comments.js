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
    loadListWithFirstPage: loadListWithFirstPageThunk,
    updateListWithNextPage: updateListWithNextPageThunk,
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
  dispatch(loadListWithFirstPageThunk(dispatch));

export const updateListWithNextPage = page => dispatch =>
  dispatch(updateListWithNextPageThunk(dispatch, page));

export default handleActions({
  [`${loadListWithFirstPageThunk}_PENDING`](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [`${loadListWithFirstPageThunk}_FULFILLED`](state, { payload: { data } }) {
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
  [`${updateListWithNextPageThunk}_PENDING`](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [`${updateListWithNextPageThunk}_FULFILLED`](state, { payload: { data, nextPage: page } }) {
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

