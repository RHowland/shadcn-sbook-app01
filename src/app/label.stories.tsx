import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";


const meta: Meta<typeof Label> = {
    title: 'App/Page/Label',
    component: Label,
    argTypes: {},
  
  parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
  };
  
  
  
  export default meta;
  type Story = StoryObj<typeof Label>;
  
  export const _Small: Story = {
    render:() => (
<div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" className="text-xs">Accept terms and conditions</Label>
    </div>
  </div>
    ),
};
  
  export const _Default: Story = {
      render:() => (
<div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
      ),
  };

  export const _Medium: Story = {
    render:() => (
  <div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" className="text-base">Accept terms and conditions</Label>
    </div>
  </div>
    ),
  };


  export const _Large: Story = {
    render:() => (
<div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" className="text-lg">Accept terms and conditions</Label>
    </div>
  </div>
    ),
};

