import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Texto',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const Dark = (args) => <Heading {...args} />;
export const Light = (args) => <Heading {...args} />;

Dark.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'Texto está escuro',
  colorDark: true,
};

Light.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

Light.args = {
  children: 'Texto está claro',
};
