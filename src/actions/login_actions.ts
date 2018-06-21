import { Dispatch } from 'react-redux';
import axios from './../axios';

export enum LoginActionTypes {
	LOGIN_SUCCESS = 'LOGIN_SUCCESS',
	LOGIN_PENDING = 'LOGIN_PENDING',
	LOGIN_ERROR = 'LOGIN_ERROR',
	VIEW_ERROR = 'VIEW_ERROR',
	USER_LOGGEDIN = 'USER_LOGGEDIN'
}

export function login(userInfo: any) {

	return (dispatch: Dispatch<any>) => {
		
		dispatch({ type: LoginActionTypes.VIEW_ERROR, viewError: false});
		if (userInfo.Login === true) {
			
			axios.post('/api/login', {loginId: userInfo.username, password: userInfo.password})
			.then((data) => {
				if (data.status === 200 && data.data !== undefined) {
					localStorage.setItem(
						'userDetails',
						JSON.stringify({ userData: data.data })
					);
					dispatch({ type: LoginActionTypes.LOGIN_SUCCESS, payload: data.data});
					dispatch({ type: LoginActionTypes.LOGIN_PENDING, isLoginPending: false });
				} else {
					dispatch({ type: LoginActionTypes.LOGIN_ERROR, loginError: 'Invalid userId or Password'});
					dispatch({ type: LoginActionTypes.VIEW_ERROR, viewError: true});
				}

			})
			.catch (error => {
				dispatch({ type: LoginActionTypes.LOGIN_ERROR, loginError: 'Invalid userId or Password'});
				dispatch({ type: LoginActionTypes.VIEW_ERROR, viewError: true});
			});
		
		} else {
			dispatch({ type: LoginActionTypes.LOGIN_SUCCESS, payload: userInfo});
		}
		
	};
}

export function logout(userInfo: any) {
	return (dispatch: Dispatch<any>) => {
	
			dispatch({ type: LoginActionTypes.VIEW_ERROR, viewError: userInfo });

	};
}

export function userLoggedIn(userInfo: any) {
	return (dispatch: Dispatch<any>) => {
	
			dispatch({ type: LoginActionTypes.USER_LOGGEDIN, payload: userInfo });

	};
}

export function loginPending(isLoginPending: boolean) {
	return (dispatch: Dispatch<any>) => {
	
			dispatch({ type: LoginActionTypes.LOGIN_PENDING, isLoginPending: isLoginPending });

	};
}
export function loginError(userInfo: any) {
	return (dispatch: Dispatch<any>) => {
	
			dispatch({ type: LoginActionTypes.LOGIN_ERROR, loginError: userInfo });

	};
}