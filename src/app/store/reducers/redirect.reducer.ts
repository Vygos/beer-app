import { createReducer, on } from '@ngrx/store'
import { redirectRoute } from '../actions/redirect.action'

export interface State {
    url: String
}

const initialState: State = {
    url: '/'
}

export function redirectReducer(state, action) {
    return _redirectReducer(state, action)
}

const _redirectReducer = createReducer(initialState, 
    on(redirectRoute, (state, action) => ({url: action.url}))
)