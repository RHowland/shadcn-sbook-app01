import type { Meta, StoryObj } from '@storybook/react';
import ComponentExample3 from "./Example3/page";



const meta: Meta<typeof ComponentExample3> = {
  title: 'App/Examples/ComponentExample3',
  component: ComponentExample3,
  

  
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};


export default meta;
type Story = StoryObj<typeof ComponentExample3>;

export const Primary: Story = {
  args:{
  title:'Card Title',
  description:'Card Description',
  cardName:'Card Name',
  }
};