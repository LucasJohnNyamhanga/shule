/** @type {import('next').NextConfig} */




const withPWA = require('next-pwa')({
  dest: 'public',
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === 'development',
})

module.exports = withPWA({
  // next.js config
	reactStrictMode: true,
	images: {
		domains: ['database.co.tz', 'shule.co.tz', '127.0.0.1'],
	},
})