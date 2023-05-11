import styled from "styled-components";

export const HeaderContainer = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;

   nav {
      display: flex;
      gap: 0.5rem;

      a {
         width: 3rem;
         height: 3rem;
         box-shadow: none;

         display: flex;
         justify-content: center;
         align-items: center;
         text-decoration: none;

         color: ${(props) => props.theme['gray-100']};

         border-top: 3px solid transparent; // colocu a borda top e bottom para quando tiver o hover o icon não alterar a posição
         border-bottom: 3px solid transparent;

         &:hover {
            border-bottom: 3px solid ${(props) => props.theme['green-500']};
         }

         &.active {
            color: ${(props) => props.theme['green-500']};
         }
      }
   }
`;
