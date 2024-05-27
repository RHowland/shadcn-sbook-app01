import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";


const meta: Meta<typeof Label> = {
    title: 'App/Page/Label',
    component: Label,
    argTypes: {
      className:{
        options:["text-xs","text","text-base","text-lg"],
        control: {type:'radio'},
      }
    },
  
  parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
  };
  
  
  
  export default meta;
  type Story = StoryObj<typeof Label>;
  
  export const _Small: Story = {
    render:({className}) => (
<div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" className={className}>Accept terms and conditions</Label>
    </div>
  </div>
    ),
};
  
  export const _Default: Story = {
      render:({className}) => (
<div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className={className}>Accept terms and conditions</Label>
      </div>
    </div>
      ),
  };

  export const _Medium: Story = {
    render:({className}) => (
  <div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" className={className}>Accept terms and conditions</Label>
    </div>
  </div>
    ),
  };


  export const _Large: Story = {
    render:({className}) => (
<div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" className={className}>Accept terms and conditions</Label>
    </div>
  </div>
    ),
};

