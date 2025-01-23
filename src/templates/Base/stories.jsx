import TemplateBase from '.';
import { mockBase } from './mock';

export default {
  title: 'Base/TemplateBase',
  component: TemplateBase,
  args: mockBase,
};

export const Template = (args) => {
  return (
    <div>
      <TemplateBase {...args} />
    </div>
  );
};
