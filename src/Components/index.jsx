import React from 'react';

import Comments from './Comments';

import './style.sss';

export default () => (
  <div className="page">
    <div styleName="block">
      <div styleName="block_element">
        Hello, world!
      </div>
    </div>
    <Comments />
  </div>
);
