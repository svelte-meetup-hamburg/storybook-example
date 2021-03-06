module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
	core: {
		builder: 'storybook-builder-vite'
	},
	svelteOptions: {
		preprocess: import('../svelte.config.js').preprocess
	},

	async viteFinal(config, { configType }) {
		const path = require('path');

		config.resolve.alias = [{ find: '$lib', replacement: path.resolve('./src/lib') }];

		return config;
	}
};
