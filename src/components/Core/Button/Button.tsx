import * as React from 'react';

interface ButtonProps {
	children: String;
	type: any;
}
const Button = (props: ButtonProps) => {
	return (
		<div className="button-wrapper">
			<button className="f6 link dim ba ph3 pv2 mb2 dib black" type={props.type}>{props.children}</button>
		</div>
	);
};

export default Button;
