import { schema } from 'normalizr';

import { postSchema } from 'schemas/posts';

export const commentSchema = new schema.Entity('comments', {
  post: postSchema,
}, {
  idAttribute: 'id',
});
export const commentsSchema = [commentSchema];
