module.exports = {
	globDirectory: './app/',
	globPatterns: [
		'**/*.{html,xml,css,png,js,webmanifest,ico,iml,txt,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};