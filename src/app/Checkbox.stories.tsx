import type { Meta, StoryObj } from '@storybook/react';
import CheckboxDemo  from "./checkbox/page";


const meta: Meta<typeof CheckboxDemo> = {
    title: 'App/Page/Checkbox',
    component: CheckboxDemo,
    argTypes: {
      CheckboxSize: {
        options:['h-2 w-2','h-3 w-3','h-4 w-4','h-5 w-5','h-6 w-6'],
        control:{type:'radio'},
      },
      
    },
  
  parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
  };
  
  export default meta;
  type Story = StoryObj<typeof CheckboxDemo>;
  
  export const _Default: Story = {
    args:{
      CheckboxSize:'h-4 w-4',
      disableCheckbox:false,
      labelContents:'Our first props checkbox',
    }
  };

  export const _Disabled: Story = {
    args:{
      disabled:true,
    },
    render:({disabled , className}) => (
  <div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" disabled={disabled} className={className}/>
      <Label htmlFor="terms" className="text-base" >Accept terms and conditions</Label>
    </div>
  </div>
    ),
  };


  export const _Large: Story = {
    args:{
    className:'h-6 w-6',
    },
    render:({disabled , className}) => (
<div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" className={className} disabled={disabled}/>
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  </div>
    ),
};

export const _Small: Story = {
    render:({disabled , className}) => (
<div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" className="h-2 w-2" disabled={disabled}/>
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  </div>
    ),
};

export const _Square: Story = {
    render:() => (
<div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" className="rounded-none" />
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



