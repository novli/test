import React from 'react';

import Comments from 'components/Comments';

import './other.sss';

/**
 * React: Компонент страницы
 * @return {ReactElement}
 */
const Page = () => (
  <div className="page">
    <div styleName="block">
      <div styleName="block_element">
        Hello, world!
      </div>
    </div>
    <Comments />
  </div>
);

export default Page;
