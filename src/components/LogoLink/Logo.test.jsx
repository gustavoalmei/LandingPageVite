import { screen } from '@testing-library/react';
import { RenderTheme } from '../../styles/handleTheme';
import LogoLink from './index';

describe('<LogoLink/>', () => {
  test('Should be render text logo', () => {
    RenderTheme(<LogoLink link="#target" text="Olá mundo" />);
    const heading = screen.getByRole('heading', { name: 'Olá mundo' });

    expect(heading).toBeInTheDocument();
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  test('Should be render image logo', () => {
    RenderTheme(
      <LogoLink link="#target" srcImg="image.jpg" text="Olá mundo" />,
    );
    const heading = screen.queryByAltText('Olá mundo');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute('src', 'image.jpg');
  });

  test('Should match ', () => {
    RenderTheme(
      <LogoLink link="#target" srcImg="image.jpg" text="Olá mundo" />,
    );
    expect(
      screen.getByRole('heading', { name: 'Olá mundo' }),
    ).toMatchSnapshot();
  });
});
