import { dataSelector } from '../selectors';

describe('selectors', () => {
  describe('Comment selectors', () => {
    test('Comment data is selected by id', () => {
      const state = {
        comments: {
          1: {
            id: 1,
            name: 'first',
          },
          2: {
            id: 2,
            name: 'second',
          },
          3: {
            id: 3,
            name: 'third',
          },
        },
      };
      const props = {
        id: 2,
      };
      expect(dataSelector(state, props)).toEqual(state.comments[2]);
    });
  });
});
