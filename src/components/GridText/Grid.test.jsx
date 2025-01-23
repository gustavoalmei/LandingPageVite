import { GridText } from '.';
import { RenderTheme } from '../../styles/handleTheme';

import { mock } from './mock';

describe('<GridSection />', () => {
  it('should render with background', () => {
    const { container } = RenderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without background', () => {
    const { container } = RenderTheme(
      <GridText {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
