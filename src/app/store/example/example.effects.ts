import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as fromRoot from '../';
import * as exampleActions from './example.action';
import { ExampleHTTPService } from '../../core/http/example.service';


@Injectable()
export class ExampleEffects {

    /**
     * Example effect
     *
     * @type {Observable<Action>}
     * @memberof ExampleEffects
     */
    @Effect()
    setExample$: Observable<Action> = this.actions$
        .ofType(exampleActions.SET_EXAMPLE)
        .map(action => (action as exampleActions.SetExampleTitleAction).payload)
        .pipe(
            switchMap(payload => {
                return [];
            })
        );

    /**
     * Example effect
     *
     * @type {Observable<Action>}
     * @memberof ExampleEffects
     */
    @Effect()
    loadRandomUser$: Observable<Action> = this.actions$
        .ofType(exampleActions.LOAD_RANDOM_USER)
        .map(action => (action as exampleActions.LoadRandomUserAction).payload)
        .pipe(
            switchMap(payload => {
                return this.exampleHTTPService.loadRandomUser().map(output => {
                    return new exampleActions.SetExampleTitleAction(output.results[0].name.first);
                })
                .catch(error => {
                    return of(new exampleActions.LoadRandomUserErrorAction('There was an error loading the random user'));
                });
            })
        );

    constructor(
        private actions$: Actions,
        private store$: Store<fromRoot.State>,
        private exampleHTTPService: ExampleHTTPService
    ) {}
}
