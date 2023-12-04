import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';
import { BurgerProvider } from '@/contexts/BurgerContext';

describe('Navigation burger menu should close, open and scroll to element as expected', () => {
  let navMenu: HTMLElement;
  let hamburgerIcon: HTMLElement;

  beforeEach(() => {
    render(
      <BurgerProvider>
        <Navigation />
      </BurgerProvider>
    );
    navMenu = screen.getByTestId('nav-menu');
    hamburgerIcon = screen.getByTestId('burger-icon');
  });

  it('should be closed initially', async () => {
    expect(navMenu).toHaveClass('nav-menu');
    expect(navMenu).not.toHaveClass('active-menu');
  });

  it('should be opened and closed on burger click', async () => {
    fireEvent.click(hamburgerIcon);

    expect(navMenu).toHaveClass('active-menu');

    fireEvent.click(hamburgerIcon);

    expect(navMenu).not.toHaveClass('active-menu');
  });

  it('should be closed on a nav link click', async () => {
    fireEvent.click(hamburgerIcon);

    expect(navMenu).toHaveClass('active-menu');

    const introLink = screen.getByText('Introduction');

    fireEvent.click(introLink)

    expect(navMenu).not.toHaveClass('active-menu');
  });

});
