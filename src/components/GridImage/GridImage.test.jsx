import { GridImage } from '.';
import { RenderTheme } from '../../styles/handleTheme';

import { mock } from './mock';

describe('<GridImage />', () => {
  it('should render with background', () => {
    const { container } = RenderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without background', () => {
    const { container } = RenderTheme(
      <GridImage {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
