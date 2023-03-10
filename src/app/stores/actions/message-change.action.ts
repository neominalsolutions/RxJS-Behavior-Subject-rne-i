import { createAction, props } from '@ngrx/store';

export const sendMessage = createAction(
  '[Message] send',
  props<{ message: string }>()
);
//export const deleteMessage = createAction('[Message] delete');
