import TextComponent from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Expedita, eius? Harum, exercitationem impedit? Debitis voluptatem,
      labore assumenda officiis eum veritatis hic doloribus, nulla mollitia corporis voluptates.
      Maxime sapiente voluptatem asperiores?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ maxWidth: '500px' }}>
      <TextComponent {...args} />
    </div>
  );
};
