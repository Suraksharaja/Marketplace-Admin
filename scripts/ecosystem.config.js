// Build Configuration for environments using PM2
// Reference: http://pm2.keymetrics.io/docs/usage/application-declaration/
module.exports = {
	apps: [
		{
			name: 'marketplace-frontend-dev',
			script: './node_modules/react-scripts-ts/scripts/start.js',
			watch: true,
			env: {
				REACT_APP_ENV: 'local',
				REACT_APP_AXIOS_BASE_URL: 'http://localhost:3000'
			}
		},
		{
			name: 'marketplace-frontend-sandbox',
			script: 'node_modules/react-scripts-ts/scripts/start.js',
			instances: 1,
			exec_mode: 'cluster',
			env: {
				REACT_APP_ENV: 'sandbox',
				REACT_APP_AXIOS_BASE_URL: 'http://159.89.168.186:8888',
				PORT: 3000
			}
		},
		{
			name: 'marketplace-frontend-production',
			script: 'node_modules/react-scripts-ts/scripts/start.js',
			instances: 3,
			exec_mode: 'cluster',
			env: {
				REACT_APP_ENV: 'production',
				REACT_APP_AXIOS_BASE_URL: 'http://localhost:8888',
				PORT: 3000
			}
		}
	]
};
