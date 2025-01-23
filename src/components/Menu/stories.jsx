import Menu from '.';
import mock from '../../components/NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: mock,
    logoData: {
      text: 'Logo Text',
      imgLink: 'assets/images/logo.svg',
      link: '#target',
    },
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
