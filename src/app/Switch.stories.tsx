import type { Meta, StoryObj } from '@storybook/react';
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";


const meta: Meta<typeof Switch> = {
    title: 'App/Page/Switch',
    component: Switch,
    argTypes: {},
  
  parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
  };
  
  export default meta;
  type Story = StoryObj<typeof Switch>;

  export const _Default: Story = {
    render:() => (

        <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
};


