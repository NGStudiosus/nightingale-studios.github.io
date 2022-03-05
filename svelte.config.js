// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false
		}),

		// This is needed for github pages
		// paths: {
		// 	base: dev ? '' : '/home',
		// },

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	},

	experimental: {
		useVitePreprocess: true
	}
};

export default config;
