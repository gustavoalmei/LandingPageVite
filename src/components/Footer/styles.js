import { styled, css } from 'styled-components';
import { Container as TextComponet } from '../../components/TextComponent/styles';
import { Container as SectionContainer } from '../../components/SectionContainer/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.mediumGray};

    a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.fonts.sizes.xsmall};
    }

    & > ${TextComponet} {
      font-size: ${theme.fonts.sizes.xsmall};
    }

    & > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`;
