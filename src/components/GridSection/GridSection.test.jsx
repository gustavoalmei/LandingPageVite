import { RenderTheme } from '../../styles/handleTheme';
import GridSection from './index';
import { mock } from './mock';

describe('<GridSection/>', () => {
  test('Should be render', () => {
    const { container } = RenderTheme(<GridSection {...mock} />);

    expect(container).toMatchSnapshot();
  });
});
