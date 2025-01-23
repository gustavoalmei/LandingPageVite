import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { RenderTheme } from '../../styles/handleTheme';
import { theme } from '../../styles/theme';

describe('<Heading/>', () => {
  test('Should render with default values', () => {
    RenderTheme(<Heading>O Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'O Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  test('Should render with white color', () => {
    RenderTheme(<Heading colorDark={false}>O Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'O Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  test('Should render correct heading sizes', () => {
    const { rerender } = RenderTheme(<Heading size="small">O Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'O Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">O Texto 2</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'O Texto 2' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">O Texto 3</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'O Texto 3' })).toHaveStyle({
      'font-size': theme.fonts.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">O Texto 4</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'O Texto 4' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xhuge,
    });
  });

  test('Should render correct font-size when using mobile', () => {
    RenderTheme(<Heading size="huge">O Texto</Heading>);

    // o codigo abaixo verifica se existe o estilo na media informada
    expect(screen.getByRole('heading', { name: 'O Texto' })).toHaveStyleRule(
      'font-size',
      theme.fonts.sizes.large,
      {
        media: '(max-width:  768px)',
      },
    );
  });

  test('Should render with uppercase letters', () => {
    RenderTheme(<Heading uppercase>O Texto</Heading>);

    expect(screen.getByRole('heading', { name: 'O Texto' })).toHaveStyleRule(
      'text-transform',
      'uppercase',
    );
  });

  test('Should render correct heading element', () => {
    const { container } = RenderTheme(<Heading as="h6">O Texto</Heading>);
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLocaleLowerCase()).toBe('h6');
  });
});
