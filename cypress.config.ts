import { defineConfig } from 'cypress';
import path from 'path';

export default defineConfig({
  component: {
    supportFile: 'cypress/support/component.tsx',
    devServer: {
      framework: 'next',
      bundler: 'webpack',
      webpackConfig: {
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
          alias: {
            '@components': path.resolve(__dirname, 'components/')
          }
        }
      }
    },
    video: false
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
