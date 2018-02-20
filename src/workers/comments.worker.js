import { normalize } from 'normalizr';

import { commentsSchema } from 'schemas/comments';

export const normalizeComments = data => {
  const start = Date.now();
  while (Date.now() - start < 1000) {
    //
  }
  return normalize(data, commentsSchema);
};

export const dummy = 0;
