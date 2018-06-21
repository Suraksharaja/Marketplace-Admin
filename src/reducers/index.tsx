import CartReducer from './cart_reducer';
import NotificationReducer from './notification_reducer';
import { combineReducers, Reducer } from 'redux';
import { StoreState } from '../types';
import userInfo from './login_reducer';

const rootReducer: Reducer<StoreState> = combineReducers<any>({
	cartReducer: CartReducer,
	notificationReducer: NotificationReducer,
	userInfo: userInfo
});

export default rootReducer;