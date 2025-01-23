import SectionContainer from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>sectionContainer</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          eius, rerum odio ex at autem facilis? Repudiandae distinctio sequi
          velit ad. Expedita velit natus eius neque repellendus molestias
          cupiditate unde!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
