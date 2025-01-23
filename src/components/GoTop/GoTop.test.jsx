import { screen } from '@testing-library/react';
import { RenderTheme } from '../../styles/handleTheme';
import GoTop from './index';

describe('<GoTop/>', () => {
  test('Should render a go to top button', () => {
    const { container } = RenderTheme(<GoTop />);

    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute(
      'href',
      '#',
    );
    expect(container).toMatchSnapshot();
  });
});
