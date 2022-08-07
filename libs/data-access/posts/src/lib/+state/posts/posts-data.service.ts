import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { PostsEntity } from './posts.models';

@Injectable({
  providedIn: 'root',
})
export class PostsDataService {
  getAllPosts() {
    // TODO: Fetch from database
    return of(TEST_POSTS);
  }
}

export const TEST_POSTS: PostsEntity[] = [
  {
    id: '1',
    title: 'My First Post',
    body: "I can't believe it's not my second post!",
    authorId: 'adevil5',
  },
  {
    id: '2',
    title: 'My Second Post',
    body: "I can't believe this is my second post! Good job, me!",
    authorId: 'adevil5',
  },
  {
    id: '3',
    title: 'The Lost Bee: A Bumble Story',
    body: '"Where am I?" said the little bee. "I\'m not in Kansas anymore."',
    authorId: 'bumble1',
  },
  {
    id: '4',
    title: 'Grocery List',
    body: '- butter\n- tortillas\n- impossible ground meat\n- daiya cheese shreds',
    authorId: 'adevil5',
  },
  {
    id: '5',
    title: 'Bio: Bumble',
    body: "I was born a tiny bee. My parents were always buzzing around. I love honey, but I can't be bothered to make any.",
    authorId: 'bumble1',
  },
];
