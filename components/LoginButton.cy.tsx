import LoginButton from './LoginButton';

describe('<LoginButton />', () => {
  it('should render the login button if a session does not exist', () => {
    cy.mount({ component: <LoginButton /> });
    cy.findByRole('button', { name: /login/i }).should('exist');
  });

  it('should render the logout button if a session exists', () => {
    cy.fixture('nextAuth/session.json').then((session) => {
      cy.mount({ component: <LoginButton />, authenticated: true });
      cy.findByRole('button', { name: /logout/i }).should('exist');
    });
  });
});
