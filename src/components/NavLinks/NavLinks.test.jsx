import { screen } from '@testing-library/react';
import NavLinks from '.';
import { RenderTheme } from '../../styles/handleTheme';
import mock from './mock';

describe('<NavLinks/>', () => {
  test('Should be render', () => {
    RenderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  test('Should not render links', () => {
    RenderTheme(<NavLinks />);
    expect(screen.queryAllByText(/link/i)).toHaveLength(0);
  });

  test('Should match snapshot', () => {
    const { container } = RenderTheme(<NavLinks links={mock} />);
    expect(container).toMatchSnapshot();
  });

  test('Should render media query', () => {
    RenderTheme(<NavLinks links={mock} />);

    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: '(max-width:  768px)',
      },
    );
  });
});
