import { Action } from './../actions/type';
import { StoreState } from '../types';
import { ADD_NOTIFICATION } from '../actions/notification_actions';

export default function(state: StoreState = {}, action: Action) {
	switch (action.type) {
		case ADD_NOTIFICATION:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
}