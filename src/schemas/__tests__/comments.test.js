import { normalize } from 'normalizr';

import { commentsSchema } from '../comments';

describe('schemas', () => {
  describe('comments', () => {
    test('list is normalized', () => {
      const data = [
        {
          postId: 1,
          id: 1,
          name: 'first',
          email: 'first@e.mail',
          body: 'first body',
          post: {
            userId: 1,
            id: 1,
            title: 'first title',
            body: 'first body',
          },
        },
        {
          postId: 1,
          id: 2,
          name: 'second',
          email: 'second@e.mail',
          body: 'second body',
          post: {
            userId: 1,
            id: 1,
            title: 'first title',
            body: 'first body',
          },
        },
        {
          postId: 2,
          id: 3,
          name: 'third',
          email: 'third@e.mail',
          body: 'third body',
          post: {
            userId: 1,
            id: 2,
            title: 'second title',
            body: 'second body',
          },
        },
        {
          postId: 2,
          id: 4,
          name: 'fourth',
          email: 'fourth@e.mail',
          body: 'fourth body',
          post: {
            userId: 1,
            id: 2,
            title: 'second title',
            body: 'second body',
          },
        },
      ];
      const normalizedData = {
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
      expect(normalize(data, commentsSchema)).toEqual(normalizedData);
    });
  });
});
