import { styled, css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;

    right: 2rem;
    bottom: 2rem;
    z-index: 6;
    opacity: 0.7;
    border-radius: 50%;
  `}
`;
