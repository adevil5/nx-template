import { Action } from '@ngrx/store';

import * as PostsActions from './posts.actions';
import { PostsEntity } from './posts.models';
import { initialPostsState, postsReducer, PostsState } from './posts.reducer';

describe('Posts Reducer', () => {
  const createPostsEntity = (
    id: string,
    title = '',
    body = '',
    authorId = ''
  ): PostsEntity => ({
    id,
    title: title || `title-${id}`,
    body: body || `body-${id}`,
    authorId: authorId || `authorId-${id}`,
  });

  describe('valid Posts actions', () => {
    it('loadPostsSuccess should return the list of known Posts', () => {
      const posts = [
        createPostsEntity('PRODUCT-AAA'),
        createPostsEntity('PRODUCT-zzz'),
      ];
      const action = PostsActions.loadPostsSuccess({ posts });

      const result: PostsState = postsReducer(initialPostsState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = postsReducer(initialPostsState, action);

      expect(result).toBe(initialPostsState);
    });
  });
});
