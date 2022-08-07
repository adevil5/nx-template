import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, switchMap } from 'rxjs';

import { PostsDataService } from './posts-data.service';
import * as PostsActions from './posts.actions';

@Injectable()
export class PostsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.initPosts),
      switchMap(() =>
        this.postsDataService.getAllPosts().pipe(
          map((posts) => PostsActions.loadPostsSuccess({ posts })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private postsDataService: PostsDataService
  ) {}
}
