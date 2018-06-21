import { Action } from './../actions/type';
import { StoreState } from '../types';
import { CartActionTypes } from '../actions/cart_actions';

export default function(state: StoreState = {}, action: Action): StoreState {
	switch (action.type) {
		case CartActionTypes.GET_SESSION_CART:
			return {
				...state,
				sessionCart: action.payload
			};
		case CartActionTypes.ADD_SESSION_CART_ITEM:
			return state;
		default:
			return state;
	}
}