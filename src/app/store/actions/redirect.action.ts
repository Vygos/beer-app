import { createAction, props } from "@ngrx/store";

export const REDIRECT = '[Redirect] Redirect';


export const redirectRoute = createAction(REDIRECT, props<{url: String}>())