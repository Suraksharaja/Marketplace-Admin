import * as React from 'react';
import * as PropTypes from 'prop-types';

type NotificationProps = {
	notificationSystem: any;
};

class NotificationProvider extends React.Component<NotificationProps, any> {
	static childContextTypes = {
		notificationSystem: PropTypes.object.isRequired
	};

	constructor(props: NotificationProps) {
		super(props);
		this.state = {};
	}
	
	getChildContext() {
		const { notificationSystem } = this.props;
		return {
			notificationSystem
		};
	}

	render() {
		return React.Children.only(this.props.children);
	}
}

export default NotificationProvider;
