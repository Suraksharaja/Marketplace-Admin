import * as React from 'react';

interface InputProps {
	type: any;
	name: any;
	onChange: any;
}

const ComponentName = (props: InputProps) => {
	return (
		<div>
			<input 
				type={props.type} 
				name={props.name}
				onChange={props.onChange}
				autoComplete="off"
				className="pa2 input-reset ba bg-transparent black-60 b--black-30 w-100 mt1"
			/>
		</div>
	);
};

export default ComponentName;
