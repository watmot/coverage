import LoginButton from './LoginButton';

describe('<LoginButton />', () => {
  it('should render', () => {
    cy.mount(<LoginButton />);
    cy.findByRole('button').should('exist');
  });
});
