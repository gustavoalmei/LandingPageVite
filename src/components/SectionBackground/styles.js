import { styled, css } from 'styled-components';

const setBackgroundColor = (theme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !['background'].includes(prop),
})`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && setBackgroundColor(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
