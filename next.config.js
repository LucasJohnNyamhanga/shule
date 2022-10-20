const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
	reactStrictMode: true,
  images: {
		domains: ['database.co.tz', 'shule.co.tz', '127.0.0.1'],
	},
});