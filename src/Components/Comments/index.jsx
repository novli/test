import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { loadListWithFirstPage, updateListWithNextPage } from 'state/comments';

import Comment from './Comment';

const mapStateToProps = ({ comments: { page, commentsList, loading } }) => ({
  page,
  commentsList,
  loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadFirstPage: loadListWithFirstPage,
  loadNextPage: updateListWithNextPage,
}, dispatch);

const Comments = ({
  page,
  commentsList,
  loading,
  loadNextPage,
}) => {
  const comments = commentsList.map(id => (
    <Comment key={id} id={id} />
  ));
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>body</td>
            <td>email</td>
          </tr>
        </thead>
        <tbody>
          {comments}
        </tbody>
      </table>
      <div><strong>Page: {page + 1}</strong> <i>{loading ? 'loading' : null}</i></div>
      <button onClick={() => loadNextPage(page)}>Load Next Page</button>
    </Fragment>
  );
};

Comments.propTypes = {
  page: PropTypes.number.isRequired,
  commentsList: PropTypes.arrayOf(PropTypes.number).isRequired,
  loading: PropTypes.bool.isRequired,
  loadFirstPage: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  loadNextPage: PropTypes.func.isRequired,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.loadFirstPage();
    },
  }),
)(Comments);
