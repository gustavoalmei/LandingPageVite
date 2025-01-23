import { screen } from '@testing-library/react';
import { RenderTheme } from '../../styles/handleTheme';
import MenuLink from './index';

describe('<MenuLink/>', () => {
  test('Should be render a link', () => {
    RenderTheme(<MenuLink link="https://www.google.com">Children</MenuLink>);

    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  test('Should be open in a new tab', () => {
    const { container } = RenderTheme(
      <MenuLink link="https://www.google.com" newTab="true">
        Children
      </MenuLink>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
