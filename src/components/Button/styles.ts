import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   backgroundColor?: string;
   hoverBackgroundColor?: string;
}

export const Button = styled.button<ButtonProps>`
   width: 100%;
   height: 3rem;
   border: 0;
   border-radius: 8px;

   display: flex;
   justify-content: center;
   align-items: center;

   gap: 0.5rem;
   font-weight: bold;

   cursor: pointer;

   background-color: ${(props) => props.backgroundColor || props.theme['green-500']};
   color: ${(props) => props.theme['gray-100']};

   &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
   }

   &:not(:disabled):hover {
      background-color: ${(props) => props.hoverBackgroundColor || props.theme['green-700']};
   }
`;
