import type { Meta, StoryObj } from '@storybook/react';
import ComponentExample1 from "./Example2/page";
import ComponentExample2 from './Example2/page';


const meta: Meta<typeof ComponentExample1> = {
  title: 'App/Examples/ComponentExample2',
  component: ComponentExample1,
  

  
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};


export default meta;
type Story = StoryObj<typeof ComponentExample2>;

export const Primary: Story = {};
  