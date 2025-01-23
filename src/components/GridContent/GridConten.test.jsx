import { RenderTheme } from '../../styles/handleTheme';
import { mock } from '../GridContent/mock';
import GridContent from './index';

describe('<GridContent/>', () => {
  test('Should be render', () => {
    const { container } = RenderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
