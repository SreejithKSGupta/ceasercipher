import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {

	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter()
	},
	vitePlugin: {
		experimental : {
			optimizeCss: true,
			
		},
		inspector: {
			customInspector: true,
			overlay: true,
			holdMode: true,
			showToggleButton: true,
		    togglebuttonpos: 'top-right',
		},
	}
};

export default config;
