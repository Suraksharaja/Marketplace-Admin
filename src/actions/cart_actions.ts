import { Dispatch } from 'react-redux';
import axios from './../axios';
import { addNotification } from './notification_actions';
export enum CartActionTypes {
	GET_SESSION_CART = 'GET_SESSION_CART',
	ADD_SESSION_CART_ITEM = 'ADD_SESSION_CART_ITEM',
	REMOVE_SESSION_CART_ITEM = 'REMOVE_SESSION_CART_ITEM'
}

export function getSessionCart() {
	return (dispatch: Dispatch<any>) => {
		axios.get('/api/session/cart')
		.then((sessionCartResponse) => {
			dispatch({ type: CartActionTypes.GET_SESSION_CART, payload: sessionCartResponse.data });
		});
	};
}

export function addSessionCartItem(quantity: Number, variantId: Number) {
	return (dispatch: Dispatch<any>) => {
		axios.post('/api/session/cart/item', {
			quantity,
			variantId
		})
		.then((data) => {
			dispatch({ type: CartActionTypes.ADD_SESSION_CART_ITEM, payload: data.data });
			axios.get('/api/session/cart')
			.then((sessionData) => {
				dispatch({ type: CartActionTypes.GET_SESSION_CART, payload: sessionData.data });
				if (quantity > 0) {
					dispatch(addNotification('Your item was added successfully', 'success', 'Item Added', 'tl'));
				} else {
					dispatch(addNotification('Your item was updated successfully', 'success', 'Item Updated', 'tl'));
				}
			});
		});
	};
}

export function removeSessionCartItem(variantId: Number) {
	return (dispatch: Dispatch<any>) => {
		axios.delete('/api/session/cart/item/' + variantId)
		.then((data) => {
			dispatch({ type: CartActionTypes.REMOVE_SESSION_CART_ITEM, payload: data.data });
			axios.get('/api/session/cart')
			.then((sessionData) => {
				dispatch({ type: CartActionTypes.GET_SESSION_CART, payload: sessionData.data });
				dispatch(addNotification('Your item was removed successfully', 'success', 'Item Removed', 'tl'));
			});
		});
	};
}
