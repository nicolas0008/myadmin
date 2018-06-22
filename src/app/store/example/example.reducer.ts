import * as exampleAction from './example.action';
import * as fromRoot from '../';

export interface ExampleState {
    name: string;
}

export const initialState: ExampleState = {
    name: ''
};

export const getName = (state: ExampleState) => state.name;

export function ExampleReducer(state = initialState, action: exampleAction.Actions): ExampleState {
    switch (action.type) {
        case exampleAction.SET_EXAMPLE: {
            return Object.assign({}, state, {
                name: action.payload
            });
        }

        default: { return state; }
    }
}
