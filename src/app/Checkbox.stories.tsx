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





