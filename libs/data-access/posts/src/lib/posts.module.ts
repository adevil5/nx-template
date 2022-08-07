import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPosts from './+state/posts/posts.reducer';
import { PostsEffects } from './+state/posts/posts.effects';
import { PostsFacade } from './+state/posts/posts.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPosts.POSTS_FEATURE_KEY, fromPosts.postsReducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
  providers: [PostsFacade],
})
export class DataAccessPostsModule {}
