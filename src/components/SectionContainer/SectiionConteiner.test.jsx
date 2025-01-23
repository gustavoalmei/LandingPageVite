import { screen } from '@testing-library/react';
import { RenderTheme } from '../../styles/handleTheme';
import SectionContainer from './index';

describe('<SectionContainer/>', () => {
  test('Should be render', () => {
    const { container } = RenderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>,
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
