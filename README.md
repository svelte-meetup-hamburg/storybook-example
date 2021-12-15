# Setup infos
SvelteKit is the foundation that provides
- Svelte for component creation
- Routing
- TypeScript integration
- SSR
- dev setup (with Vite)
- component lib and app build setups
- and much more -> https://kit.svelte.dev/
- see `svelte.config.js`

Added functionality
  - CSS utils with PostCSS and Tailwind 3 (via https://github.com/svelte-add/tailwindcss)
    - see `postcss.config.cjs`, `tailwind.config.cjs`
  - Component documenation and manual tests with Storybook
    - see `/.storybook`
  - visual regression tests with Loki
    - see `/package.json` and `.loki`
  - e2e / ui tests with cypress (with Storybook) / playwright (TODO)
    - see `/cypress.json` and `/cypress`

Additional setup
- prettier
- eslint

# Things to do

- npm install
  - npm install --force if peerDependencies do not match

- npm run
  - dev: dev with vite
  - build: create package for a lib
  - storybook: components / pages with storybook
  - test: tests with cypress
  - loki (start storybook first)
    - loki_update: create inital reference screenshots
    - loki_test: compare new screenshots against reference screenshots
    - loki_approve: approve new screenshots
