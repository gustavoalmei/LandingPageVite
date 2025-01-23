import GoTop from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '200vh' }}>
      <h1>Lorem ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima
        exercitationem animi accusantium reiciendis adipisci dignissimos rerum
        consectetur accusamus, quidem autem aliquid mollitia voluptas iure esse
        quisquam. Minus, maxime quaerat.
      </p>
      <h1>Lorem ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima
        exercitationem animi accusantium reiciendis adipisci dignissimos rerum
        consectetur accusamus, quidem autem aliquid mollitia voluptas iure esse
        quisquam. Minus, maxime quaerat.
      </p>
      <h1>Lorem ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima
        exercitationem animi accusantium reiciendis adipisci dignissimos rerum
        consectetur accusamus, quidem autem aliquid mollitia voluptas iure esse
        quisquam. Minus, maxime quaerat.
      </p>
      <h1>Lorem ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima
        exercitationem animi accusantium reiciendis adipisci dignissimos rerum
        consectetur accusamus, quidem autem aliquid mollitia voluptas iure esse
        quisquam. Minus, maxime quaerat.
      </p>
      <h1>Lorem ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima
        exercitationem animi accusantium reiciendis adipisci dignissimos rerum
        consectetur accusamus, quidem autem aliquid mollitia voluptas iure esse
        quisquam. Minus, maxime quaerat.
      </p>
      <h1>Lorem ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima
        exercitationem animi accusantium reiciendis adipisci dignissimos rerum
        consectetur accusamus, quidem autem aliquid mollitia voluptas iure esse
        quisquam. Minus, maxime quaerat.
      </p>
      <h1>Lorem ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima
        exercitationem animi accusantium reiciendis adipisci dignissimos rerum
        consectetur accusamus, quidem autem aliquid mollitia voluptas iure esse
        quisquam. Minus, maxime quaerat.
      </p>
      <h1>Lorem ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima
        exercitationem animi accusantium reiciendis adipisci dignissimos rerum
        consectetur accusamus, quidem autem aliquid mollitia voluptas iure esse
        quisquam. Minus, maxime quaerat.
      </p>
      <GoTop {...args} />
    </div>
  );
};
