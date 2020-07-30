import { User } from "src/app/model/user.model";
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.action';
import { state } from '@angular/animations';

export interface State {
    isLoading: boolean
    user: User
    error: string
}


const initialState: State = {
    isLoading: false,
    user: null,
    error: null
}

export function authReducer(state, action) {
    return _authReducer(state, action);
}

const _authReducer = createReducer(initialState, 
    on(AuthActions.authUser, () => ({
        ...state,
        isLoading: true
    })),
    on(AuthActions.authSuccesful, (state, {email, nome}) => ({
        ...state,
        isLoading: false,
        user: {
            nome,
            email
        }
    }))
)
