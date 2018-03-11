import { CommentComponent } from '../';

const setup = () => {
  const props = {
    id: 1,
    name: 'Name',
    body: 'Body',
    email: 'e@mail.ru',
  };

  const wrapper = shallow(<CommentComponent {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('components', () => {
  describe('Comment', () => {
    test('component is rendered', () => {
      const { wrapper } = setup();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
