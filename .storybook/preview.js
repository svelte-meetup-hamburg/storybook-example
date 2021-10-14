import '../src/app.css';

import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
	viewport: {
		viewports: {
			...INITIAL_VIEWPORTS,
			myTablet: {
				name: 'myTablet',
				styles: {
					width: '1024px',
					height: '768px'
				}
			}
		},
		// defaultViewport: 'myTablet',
		isRotated: false
	},
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
};
