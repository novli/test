import createCachedSelector from 're-reselect';

export const dataSelector = createCachedSelector(
  state => state.comments,
  (state, props) => props.id,
  (comments, id) => comments[id],
)((state, props) => props.id);

export const dummy = null;
