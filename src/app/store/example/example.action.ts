import { Action } from '@ngrx/store';

export const SET_EXAMPLE = '[EXAMPLE] Sets the example title';
export const LOAD_RANDOM_USER = '[EXAMPLE] Loads a random user from an HTTP call';
export const LOAD_RANDOM_USER_ERROR = '[EXAMPLE] Load random user error';

/**
 * Search Query Action
 *
 * @export
 * @class ExampleAction
 * @implements {Action}
 */
export class SetExampleTitleAction implements Action {
    readonly type = SET_EXAMPLE;

    constructor (public payload: string) {}
}

/**
 * Load Random User Action
 *
 * @export
 * @class ExampleAction
 * @implements {Action}
 */
export class LoadRandomUserAction implements Action {
    readonly type = LOAD_RANDOM_USER;

    constructor (public payload: string) {}
}

/**
 * Load Random User Error Action
 *
 * @export
 * @param error
 * @implements {Action}
 */
export class LoadRandomUserErrorAction implements Action {
    readonly type = LOAD_RANDOM_USER_ERROR;

    constructor (public payload: string | Object) {}
}

export type Actions
    = SetExampleTitleAction
    | LoadRandomUserAction
    | LoadRandomUserErrorAction;
