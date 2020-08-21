import { createAction, props }  from '@ngrx/store'
import { Action } from '@ngrx/store'
import { User } from 'src/app/model/user.model';

export const LOGIN = '[AuthUser] Login User';
export const LOGIN_AUTH = '[AuthUser] Login Successful';
export const LOGIN_FAIL = '[AuthUser] Login Fail';
export const authUser = createAction(LOGIN, props<{user: string, password: string}>())
export const authSuccesful = createAction(LOGIN_AUTH, props<User>());
export const authError = createAction(LOGIN_FAIL, props<{error: string}>());