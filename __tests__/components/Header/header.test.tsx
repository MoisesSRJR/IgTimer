import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import { Header } from '../../../src/components/Header/Index';

describe('Header', () => {
  it('renders logo', () => {
    render(<Header />);
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });
});

