import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { countNumber } from 'state/comments';

const mapStateToProps = ({ comments: { world, number } }) => ({
  world,
  number,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  count: countNumber,
}, dispatch);

const Test = ({ world, number, count }) => (
  <div>
    <div>Hello {world}! {number}</div>
    <button onClick={() => count(2)}>count</button>
  </div>
);

Test.propTypes = {
  world: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  count: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
