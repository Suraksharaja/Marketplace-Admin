import * as React from 'react';

import { Route, Switch } from 'react-router-dom';
// Import components
import Layout from './components/Layout/Layout';
import Admin from './containers/admin/admin';
import PassWd from './containers/password/password';

class App extends React.Component<any, any> {

	render() {
		return (
			<div className="App">
				<Layout location={this.props.location}>
					<Switch>
						<Route path="/" exact={true} component={Admin} />
						<Route path="/admin" component={Admin} />
						<Route path="/forgotpassword" component={PassWd} />
					</Switch>
				</Layout>
			</div>
		);
	}
}

export default App;
