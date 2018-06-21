export interface Action {
	type: string;
	payload?: any;
	isLoginPending?: any;
	loginError?: string;
	viewError?: boolean;
}