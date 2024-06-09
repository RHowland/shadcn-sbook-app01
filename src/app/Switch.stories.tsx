import type { Meta, StoryObj } from '@storybook/react';
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";


const meta: Meta<typeof Switch> = {
    title: 'App/Page/Switch',
    component: Switch,
    argTypes: {
      className:{
        options:['rounded-none','rounded-full'],
        control:{type:'inline-radio'}
      },
      allignment:{
        options:['flex items-center space-x-2','flex flex-col space-y-3'],
        control:{type:'radio'}
      },
    },
  
  parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
  };
  
  export default meta;
  type Story = StoryObj<typeof Switch>;

  export const _Default: Story = {
    render:({className,allignment}) => (

        <div className={allignment}>
      <Switch id="airplane-mode" className={className}/>
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
};

export const _Secondary: Story = {
  render:({className,allignment}) => (

      <div className={allignment}>
    <Switch id="airplane-mode" className={className}/>
    <Label htmlFor="airplane-mode">Airplane Mode</Label>
  </div>
)
};


