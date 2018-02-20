import { schema } from 'normalizr';

export const postSchema = new schema.Entity('posts', {
}, {
  idAttribute: 'id',
});

export const dummy = null;
