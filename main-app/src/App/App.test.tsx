import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import { App } from './App';

vi.mock('@jk/micro-fe', () => ({
  default: () => <div>MicroFE</div>,
}));

const renderApp = (route: string) => {
  window.history.pushState({}, 'Test page', route);
  return render(<App />);
};

describe('App Routing', () => {
  it('Renders MicroFE at root path ("/")', async () => {
    renderApp('/');
    expect(await screen.findByText('MicroFE')).toBeTruthy();
  });

  it('Renders PageNotFound at root path ("/abc")', async () => {
    renderApp('/abc');
    expect(await screen.findByText('Page Not Found')).toBeTruthy();
  });

  it('Show LoadingPage during lazy-loading', () => {
    renderApp('/');
    expect(() => document.querySelector('#loading-page')).toBeTruthy();
  });
});
