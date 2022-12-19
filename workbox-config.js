module.exports = {
	globDirectory: 'app/',
	globPatterns: [
		'**/*.{html,xml,css,ico,txt,png,js,md,webmanifest}'
	],
	swDest: 'app/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};