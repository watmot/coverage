import './commands';

import GlobalStyle from '@styles/global';
import React from 'react';
import { ReactElement } from 'react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';
import { mount } from 'cypress/react18';
import session from '../fixtures/nextAuth/session.json';
import theme from '@styles/theme';

Cypress.Commands.add(
  'mount',
  ({ component, authenticated = false }: { component: ReactElement; authenticated: boolean }) => {
    const App = (
      <SessionProvider session={authenticated ? session : null}>{component}</SessionProvider>
    );

    return mount(App);
  }
);
