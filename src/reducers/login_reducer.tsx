import { Action } from './../actions/type';
import { StoreState } from '../types';
import { LoginActionTypes } from '../actions/login_actions';

export default function(state: StoreState= {}, action: Action): StoreState {

	switch (action.type) {
		case LoginActionTypes.LOGIN_PENDING:
		  return Object.assign({}, state, {
			isLoginPending: action.isLoginPending
		  });
	
		case LoginActionTypes.LOGIN_SUCCESS:
		  return Object.assign({}, state, {
			...state,
			 userInfo: action.payload
			});
			case LoginActionTypes.USER_LOGGEDIN:
		  return Object.assign({}, state, {
			...state,
			 userInfo: action.payload
		  });
	
		case LoginActionTypes.LOGIN_ERROR:
		  return Object.assign({}, state, {
			loginError: action.loginError
			});
			case LoginActionTypes.VIEW_ERROR:
		  return Object.assign({}, state, {
			ViewError: action.viewError
		  });
	
		default:
		  return state;
	  }
}