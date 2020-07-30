import { createAction, props }  from '@ngrx/store'
import { Action } from '@ngrx/store'
import { User } from 'src/app/model/user.model';

export const LOGIN = '[AuthUser] Login User';
export const LOGIN_AUTH = '[AuthUser] Login Successful';
export const authUser = createAction(LOGIN, props<{user: string, password: string}>())
export const authSuccesful = createAction(LOGIN_AUTH, props<User>());