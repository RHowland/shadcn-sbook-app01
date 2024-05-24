import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";


const meta: Meta<typeof Checkbox> = {
    title: 'App/Page/Checkbox',
    component: Checkbox,
    argTypes: {},
  
  parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
  };
  
  
  
  export default meta;
  type Story = StoryObj<typeof Checkbox>;
  
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

  export const _Disabled: Story = {
    render:() => (
  <div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" disabled/>
      <Label htmlFor="terms" className="text-base">Accept terms and conditions</Label>
    </div>
  </div>
    ),
  };


  export const _Large: Story = {
    render:() => (
<div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" className="h-6 w-6"/>
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  </div>
    ),
};

export const _Small: Story = {
    render:() => (
<div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" className="h-2 w-2"/>
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  </div>
    ),
};

export const _Square: Story = {
    render:() => (
<div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" className="rounded-none"/>
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  </div>
    ),
};

export const _Rounded: Story = {
  render:() => (
<div>
  <div className="flex items-center space-x-2">
    <Checkbox id="terms" className="rounded-full"/>
    <Label htmlFor="terms">Accept terms and conditions</Label>
  </div>
</div>
  ),
};

export const _WithText: Story = {
  render:() => (
<div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  ),
};



