
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';

export function addNotification(message: string, level: string, title: string = '', position: string = 'tr') {
	return {
		type: ADD_NOTIFICATION,
		payload: {
			message,
			level,
			title,
			position
		}
	};
}
