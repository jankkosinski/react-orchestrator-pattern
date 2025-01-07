import { render } from '@testing-library/react';
import React from 'react';
import { LoadingPage } from './LoadingPage';

describe('LoadingPage', () => {
  it('Renders the LoadingPage component', () => {
    const { container } = render(<LoadingPage />);
    expect(container).toMatchSnapshot();
  });
});
