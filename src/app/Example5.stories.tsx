import type { Meta, StoryObj } from '@storybook/react';
import ComponentExample5 from "./Example5/page";


const meta: Meta<typeof ComponentExample5> = {
  title: 'App/Examples/ComponentExample5',
  component: ComponentExample5,
  

  
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};


export default meta;
type Story = StoryObj<typeof ComponentExample5>;

export const Primary: Story = {};