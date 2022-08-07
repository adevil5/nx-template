import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { TEST_POSTS } from './posts-data.service';
import * as PostsActions from './posts.actions';
import { PostsEffects } from './posts.effects';

describe('PostsEffects', () => {
  let actions: Observable<Action>;
  let effects: PostsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(PostsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: PostsActions.initPosts() });

      const expected = hot('-a-|', {
        a: PostsActions.loadPostsSuccess({ posts: TEST_POSTS }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
