import { createReducer, on } from '@ngrx/store';
import { sendMessage } from '../actions/message-change.action';

export const initialState = '';

export const messageChangeReducer = createReducer(
  initialState,
  on(sendMessage, (state, action) => {
    console.log('action', action);
    state = action.message;

    return state;
  })
);
