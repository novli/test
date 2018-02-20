import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { dataSelector } from './selectors';

const mapStateToProps = ({ comments }, props) => ({
  ...dataSelector(comments, props),
});

const Comment = ({
  id, name, body, email,
}) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{body}</td>
    <td>{email}</td>
  </tr>
);

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Comment);
