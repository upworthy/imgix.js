module.exports = function(config) {
	config.set({
		basePath: '',
		browsers: ['PhantomJS'],
		reporters: ['progress'],
		singleRun: true,
		frameworks: ['jasmine'],
		files: [
			'tests/config.js',
			'dist/imgix.min.js',
			'tests/test.js'
		]

	});
};
