import * as React from 'react';

const baseUrl = 'http://res.cloudinary.com/etruckingsoft/image/upload';
const defaultTransforms = 'd_global:not-found.gif,w_auto,q_auto,f_auto,dpr_auto';
interface ImageProps {
	url: any;
	alt: any;
	clazz?: any;
	transforms?: any;
}

const Image = (props: ImageProps) => {
	const transforms = props.transforms ? `${defaultTransforms},${props.transforms}` : defaultTransforms;
	const imageUrl = `${baseUrl}/${transforms}/${props.url}`;
	return (
		<img src={imageUrl} alt={props.alt} className={props.clazz} />
	);
};

export default Image;
