import { screen } from '@testing-library/react';
import { RenderTheme } from '../../styles/handleTheme';
import TextComponent from './index';

describe('<TextComponent/>', () => {
  test('Should be render a text', () => {
    RenderTheme(<TextComponent>Children</TextComponent>);

    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  test('Should be render a text', () => {
    const { container } = RenderTheme(<TextComponent>Children</TextComponent>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
