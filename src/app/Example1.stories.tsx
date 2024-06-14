import type { Meta, StoryObj } from '@storybook/react';
import ComponentExample1 from "./Example1/page";
import ButtonDemo from "./button/page";
import { Switch } from "@/components/ui/switch";


const meta: Meta<typeof ComponentExample1> = {
  title: 'App/Examples/ComponentExample1',
  component: ComponentExample1,

  
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};


export default meta;
type Story = StoryObj<typeof ComponentExample1>;

export const Primary: Story = {

  args:{
    buttonVariant: "outline",
    padding:"pb-3",
    text:"text-balance",
    lineHeight:"leading-relaxed",
    width:"max-w-lg",
    border:"rounded-none",
    customComp:<Switch/>,
    
  }
};