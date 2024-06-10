import type { Meta, StoryObj } from '@storybook/react';
import ComponentExample4 from "./Example4/page";



const meta: Meta<typeof ComponentExample4> = {
  title: 'App/Examples/ComponentExample4',
  component: ComponentExample4,
  

  
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};


export default meta;
type Story = StoryObj<typeof ComponentExample4>;

export const Primary: Story = {};