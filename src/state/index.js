import { combineReducers } from 'redux';

import api from './api';
import comments from './comments';

export default combineReducers({
  api,
  comments,
});
