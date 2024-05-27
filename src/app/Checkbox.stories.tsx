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
      CheckboxStyle:{
        options:['rounded-full','rounded-none','rounded-md','rounded-lg'],
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
      CheckboxStyle:'rounded-md',
      disableCheckbox:false,
      labelContents:'Our first props checkbox',
    }
  };

  export const _Disabled: Story = {
    args:{
      CheckboxSize:'h-4 w-4',
      CheckboxStyle:'rounded-md',
      disableCheckbox:true,
      labelContents:'Our first props checkbox',
    }
    
  };


  export const _Large: Story = {
    args:{
      CheckboxSize:'h-6 w-6',
      CheckboxStyle:'rounded-md',
      disableCheckbox:false,
      labelContents:'A large checkbox',
    }
};

export const _Small: Story = {
  args:{
    CheckboxSize:'h-2 w-2',
    CheckboxStyle:'rounded-md',
    disableCheckbox:false,
    labelContents:'A small checkbox',
  }
};

export const _Square: Story = {
  args:{
    CheckboxSize:'h-4 w-4',
    CheckboxStyle:'rounded-none',
    disableCheckbox:false,
    labelContents:'A square checkbox',
  }
};

export const _Rounded: Story = {
  args:{
    CheckboxSize:'h-4 w-4',
    CheckboxStyle:'rounded-full',
    disableCheckbox:false,
    labelContents:'A round checkbox',
  }
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



