import React from "react";

import { render, screen } from "@testing-library/react";
import { Avatar } from "../../../src/components/Avatar/Index";

describe('Avatar', () => {
    it('should render an avatar image', () => {
      const imageSrc = 'https://example.com/avatar.png';
      render(<Avatar image={imageSrc} />);

      const avatarImg = screen.getByAltText('Avatar Image');
      expect(avatarImg).toBeInTheDocument();
      expect(avatarImg).toHaveAttribute('src', imageSrc);
      console.log(avatarImg.className); // Verifica as classes do elemento
      //expect(avatarImg.classList.contains('avatarImg')).toBe(true);
    });

    it('should render an avatar image with border', () => {
      const imageSrc = 'https://example.com/avatar.png';
      render(<Avatar image={imageSrc} hasBorder={true} />);

      const avatarImg = screen.getByAltText('Avatar Image');
      expect(avatarImg).toBeInTheDocument();
      expect(avatarImg).toHaveAttribute('src', imageSrc);
      console.log(avatarImg.className); // Verifica as classes do elemento
      expect(avatarImg.classList.contains('withBorder')).toBe(true);
    });
  });
