import * as PostsActions from './lib/+state/posts/posts.actions';

import * as PostsFeature from './lib/+state/posts/posts.reducer';

import * as PostsSelectors from './lib/+state/posts/posts.selectors';

export * from './lib/+state/posts/posts.facade';

export * from './lib/+state/posts/posts.models';

export { PostsActions, PostsFeature, PostsSelectors };
export * from './lib/posts.module';
