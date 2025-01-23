import { screen } from '@testing-library/react';
import { RenderTheme } from '../../styles/handleTheme';
import Footer from './index';

describe('<Footer/>', () => {
  test('Should be render', () => {
    const { container } = RenderTheme(<Footer footerHtml={'<h1>Olá</h1>'} />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
