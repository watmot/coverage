import './commands';

import GlobalStyle from '@styles/global';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';
import { mount } from 'cypress/react18';
import theme from '@styles/theme';

Cypress.Commands.add('mount', (component) => {
  const App = <>{component}</>;

  return mount(App);
});
