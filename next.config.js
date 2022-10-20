const withPWA = require('next-pwa');

module.exports = withPWA({
  // next.js config
	pwa:{dest: 'public',
	register: true,
	skipWaiting: true,
	sw: 'service-worker.js',
		disable: process.env.NODE_ENV === 'development',
	},
	reactStrictMode: true,
	images: {
		domains: ['database.co.tz', 'shule.co.tz', '127.0.0.1'],
	},
})