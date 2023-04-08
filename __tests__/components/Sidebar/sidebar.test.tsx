import React from 'react';

import { render, screen } from '@testing-library/react';
import { Sidebar } from '../../../src/components/Sidebar/Index';

describe('Sidebar component', () => {
  test('renders the cover image', () => {
    render(<Sidebar />);
    const coverImage = screen.getByRole('img', { name: /cover/i });
    expect(coverImage).toBeInTheDocument();
  });

  test('renders the user profile information', () => {
    render(<Sidebar />);
    const profileName = screen.getByText('Moises Junior');
    const profileRole = screen.getByText('Web Developer');
    expect(profileName).toBeInTheDocument();
    expect(profileRole).toBeInTheDocument();
  });

  test('renders the edit profile link', () => {
    render(<Sidebar />);
    const editProfileLink = screen.getByRole('link', { name: /editar seu perfil/i });
    expect(editProfileLink).toBeInTheDocument();
  });
});
