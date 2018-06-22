import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { Sandbox } from './base.sandbox';
import * as exampleAction from '../../store/example/example.action';
import * as fromRoot from '../../store';

/**
 * Service for interacting with the Requisition Store.
 *
 * @export
 * @class CommentService
 */
@Injectable()
export class ExampleSandbox extends Sandbox {

    constructor(protected store$: Store<fromRoot.State>) {
        super(store$);
    }

    /**
     * Method to observe the example title
     *
     * @returns Observable<string>
     *
     * @memberof ExampleService
     */
    getExampleTitle(): Observable<string> {
        return this.store$.select(fromRoot.getExampleTitle);
    }

    /**
     * Method to load a random user as example on the store from an HTTP call
     *
     * @returns Observable<string>
     *
     * @memberof ExampleService
     */
    loadRandomUser(): void {
        this.store$.dispatch(new exampleAction.LoadRandomUserAction('example'));
    }

    /**
     * Creates the example title
     *
     * @param string
     * @memberof ExampleService
     */
    setExampleTitle(title: string): void {
        this.store$.dispatch(new exampleAction.SetExampleTitleAction(title));
    }
}
