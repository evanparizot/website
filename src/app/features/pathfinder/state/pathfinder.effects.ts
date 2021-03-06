import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { State } from '../pathfinder.state';
import { actionPathfinderSetStartNode } from './pathfinder.actions';
import { withLatestFrom, tap } from 'rxjs/operators';
import { selectPathfinder, selectStartNode } from './pathfinder.selectors';

// Effects take an action, do work and dispatch a new action
/*
  switchMap - cancels the current subscription/request and can cause race condition 
            - use for get requests or cancelable requests like searches
  concatMap - runs subscriptions/requests in order and is less performant
            - use for get, post and put requests when order is important
  mergeMap  - runs subscriptions/requests in parallel
            - use for put, post and delete methods when order is not important
  exhaustMap- ignores all subsequent subscriptions/requests until it completes
            - use for logins (don't want more requests until the intial one is complete)
*/

@Injectable()
export class PathfinderEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>
  ) { }

}
