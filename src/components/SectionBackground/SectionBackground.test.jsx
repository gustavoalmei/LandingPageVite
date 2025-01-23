import { screen } from '@testing-library/react';
import { RenderTheme } from '../../styles/handleTheme';
import SectionBackground from './index';

describe('<SectionBackground/>', () => {
  test('Should be render with background dark', () => {
    const { container } = RenderTheme(
      <SectionBackground backgroundBool>
        <h1>Children</h1>
      </SectionBackground>,
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('Should be render with background light', () => {
    const { container } = RenderTheme(
      <SectionBackground>
        <h1>Children</h1>
      </SectionBackground>,
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
