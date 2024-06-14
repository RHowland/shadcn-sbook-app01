import type { Meta, StoryObj } from '@storybook/react';
import ComponentExample2 from './Example2/page';


const meta: Meta<typeof ComponentExample2> = {
  title: 'App/Examples/ComponentExample2',
  component: ComponentExample2,
  

  
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};


export default meta;
type Story = StoryObj<typeof ComponentExample2>;

export const Primary: Story = {
  args:{
  iconButtonVariant : 'outline',
  orderButtonVariant : 'outline',
  dropDownButtonVariant : 'outline',
  bottomIconButtonVariant1 : 'outline',
  bottomIconButtonVariant2 : 'outline',
  }

};
  