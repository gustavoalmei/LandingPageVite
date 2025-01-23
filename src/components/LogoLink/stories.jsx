import LogoLink from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    imgLink: 'assets/images/logo.svg',
    link: 'http://localhost',
  },
  argTypes: {
    text: { type: 'string' },
  },
};

export const Text = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const Logo = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

Text.args = {
  imgLink: '',
};
