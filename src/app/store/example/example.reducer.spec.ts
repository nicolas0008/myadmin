import { ExampleReducer, ExampleState, initialState } from './example.reducer';
import * as ExampleActions from './example.action';

describe('Core -> Reducer -> CommentReducer:', () => {
    const exampleInit = initialState;

    it ('should initialize with initial state', () => {
        const state: ExampleState = ExampleReducer(initialState, {type: null, payload: null});

        expect(state).toEqual(exampleInit);
    });
});
