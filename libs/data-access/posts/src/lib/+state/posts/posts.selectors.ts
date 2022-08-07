import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POSTS_FEATURE_KEY, PostsState, postsAdapter } from './posts.reducer';

// Lookup the 'Posts' feature state managed by NgRx
export const getPostsState =
  createFeatureSelector<PostsState>(POSTS_FEATURE_KEY);

const { selectAll, selectEntities } = postsAdapter.getSelectors();

export const getPostsLoaded = createSelector(
  getPostsState,
  (state: PostsState) => state.loaded
);

export const getPostsError = createSelector(
  getPostsState,
  (state: PostsState) => state.error
);

export const getAllPosts = createSelector(getPostsState, (state: PostsState) =>
  selectAll(state)
);

export const getPostsEntities = createSelector(
  getPostsState,
  (state: PostsState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getPostsState,
  (state: PostsState) => state.selectedId
);

export const getSelected = createSelector(
  getPostsEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
