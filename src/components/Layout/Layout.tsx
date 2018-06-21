import * as React from 'react';

/**
 * Make this component location aware so it does not block rendering of the components
 * when the location changes.
 */
interface LayoutProps {
	children: {};
	location: any;
}

const Layout = (props: LayoutProps) => {
	return (
		<div>
			<main className="overflow-hidden">
					<div className="mw9-ns center">
						{props.children}
					</div>
			</main>
		</div>
	);
};

export default Layout;