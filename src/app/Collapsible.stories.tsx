import type { Meta, StoryObj } from '@storybook/react';
import CollapsibleDemo from "./collapsible/page";


const meta: Meta<typeof CollapsibleDemo> = {
  title: 'App/Page/Collapsible',
  component: CollapsibleDemo,
  argTypes: {
    variant: {
      options: ['default','secondary','destructive','ghost','outline','link'],
      control: { type: 'radio' },
    },
    width: {
      options: ['w-[175px] space-y-2','w-[350px] space-y-2','w-[500px] space-y-2'],
      control: { type: 'radio' },
    }

  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};


export default meta;
type Story = StoryObj<typeof CollapsibleDemo>;

export const Primary: Story = {

  args:{
    variant:'default',
    width: 'w-[350px] space-y-2'
  }
};

