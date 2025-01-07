import { render } from '@testing-library/react';
import React from 'react';
import { PageNotFound } from './PageNotFound';

describe('PageNotFound', () => {
  it('Renders the PageNotFound component', () => {
    const { container } = render(<PageNotFound />);
    expect(container).toMatchSnapshot();
  });
});
