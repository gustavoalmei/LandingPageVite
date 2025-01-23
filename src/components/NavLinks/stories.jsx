import NavLinks from '.';
import Links from './mock.js';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: Links,
  },
  argTypes: {
    links: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
