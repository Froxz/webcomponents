const mix = require('laravel-mix');

mix.js('src/index.js', 'dist/webcomponents.js').vue({
	version: 2,
	options: {
		shadowMode: true
	}
});