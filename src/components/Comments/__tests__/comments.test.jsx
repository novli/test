import { CommentsComponent } from '../';

const setup = () => {
  const props = {
    page: 1,
    commentsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loading: false,
    loadFirstPage: jest.fn(),
    loadNextPage: jest.fn(),
  };

  const wrapper = shallow(<CommentsComponent {...props} />);

  return {
    props,
    wrapper,
    button: wrapper.find('.button'),
  };
};

describe('components', () => {
  describe('Comments', () => {
    test('component is rendered', () => {
      const { wrapper } = setup();

      expect(wrapper).toMatchSnapshot();
    });

    test('click calls loadNextPage', () => {
      const { props: { loadNextPage }, button } = setup();

      button.simulate('click');

      expect(loadNextPage).toBeCalled();
    });
  });
});
