
import { normalize } from 'normalizr';
import { find } from 'lodash';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import { fetchCommentsByPageNumber } from 'API/comments';
import { commentsSchema } from 'schemas/comments';
import reducer, { loadListWithFirstPage, loadListWithFirstPageAsync } from '../comments';

jest.unmock('normalizr');

const middlewares = [promiseMiddleware(), thunk];
const mockStore = configureStore(middlewares);

describe('state', () => {
  describe('comments', () => {
    describe('actions', () => {
      test(`action ${loadListWithFirstPageAsync}_FULFILLED is created with right payload`, async () => {
        const store = mockStore({});
        let [{ data }] = await Promise.all([
          fetchCommentsByPageNumber(0),
          store.dispatch(loadListWithFirstPage()),
        ]);
        data = normalize(data, commentsSchema);
        const action = find(store.getActions(), { type: `${loadListWithFirstPageAsync}_FULFILLED` });
        expect(action).toEqual({
          type: `${loadListWithFirstPageAsync}_FULFILLED`,
          payload: { data },
        });
      });
    });
    describe('reducers', () => {
      test(`reducer handles ${loadListWithFirstPageAsync}_FULFILLED action`, () => {
        const data = {
          entities: {
            posts: {
              1: {
                userId: 1,
                id: 1,
                title: 'first title',
                body: 'first body',
              },
              2: {
                userId: 1,
                id: 2,
                title: 'second title',
                body: 'second body',
              },
            },
            comments: {
              1: {
                postId: 1,
                id: 1,
                name: 'first',
                email: 'first@e.mail',
                body: 'first body',
                post: 1,
              },
              2: {
                postId: 1,
                id: 2,
                name: 'second',
                email: 'second@e.mail',
                body: 'second body',
                post: 1,
              },
              3: {
                postId: 2,
                id: 3,
                name: 'third',
                email: 'third@e.mail',
                body: 'third body',
                post: 2,
              },
              4: {
                postId: 2,
                id: 4,
                name: 'fourth',
                email: 'fourth@e.mail',
                body: 'fourth body',
                post: 2,
              },
            },
          },
          result: [1, 2, 3, 4],
        };
        expect(reducer(
          {
            page: 0,
            commentsList: [],
            loading: true,
            comments: {
            },
          },
          {
            type: `${loadListWithFirstPageAsync}_FULFILLED`,
            payload: { data },
          },
        )).toEqual({
          page: 0,
          commentsList: [1, 2, 3, 4],
          loading: false,
          comments: {
            1: {
              postId: 1,
              id: 1,
              name: 'first',
              email: 'first@e.mail',
              body: 'first body',
              post: 1,
            },
            2: {
              postId: 1,
              id: 2,
              name: 'second',
              email: 'second@e.mail',
              body: 'second body',
              post: 1,
            },
            3: {
              postId: 2,
              id: 3,
              name: 'third',
              email: 'third@e.mail',
              body: 'third body',
              post: 2,
            },
            4: {
              postId: 2,
              id: 4,
              name: 'fourth',
              email: 'fourth@e.mail',
              body: 'fourth body',
              post: 2,
            },
          },
        });
      });
    });
  });
});
