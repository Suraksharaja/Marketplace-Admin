import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
const middlewares: Array<any> = [thunk];
if (process.env.NODE_ENV === `development`) {
	middlewares.push(logger);
}
const store = createStore<any>(rootReducer, applyMiddleware(...middlewares));

const app = (
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);

ReactDOM.render(
	app
	,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
