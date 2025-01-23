import { RenderTheme } from '../../styles/handleTheme';
import GridTwoColumn from './index';
import { mock } from './mock';

describe('<GridTwoColumn/>', () => {
  test('Should be render', () => {
    const { container } = RenderTheme(<GridTwoColumn {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
