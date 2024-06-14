import type { Meta, StoryObj } from '@storybook/react';
import SkeletonDemo from "./skeleton/page";


const meta: Meta<typeof SkeletonDemo> = {
  title: 'App/Page/Skeleton',
  component: SkeletonDemo,
  argTypes: {
    allign:{
        options:['flex items-center space-x-4','flex flex-col space-y-3'],
        control:{type: 'radio'},
    },
    primaryPart: {
      options: ['h-12 w-12 rounded-full','h-[125px] w-[250px] rounded-xl'],
      control: { type: 'radio' },
    },
    secondaryPart:{
      options: ['h-4 w-[250px]'],
      control: {type: 'radio'},
    },
    tertiaryPart:{
        options: ['h-4 w-[200px]'],
        control: {type: 'radio'},
    }
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SkeletonDemo>;

export const Primary: Story = {
    args:{
        allign:'flex items-center space-x-4',
        primaryPart:'h-12 w-12 rounded-full',
        secondaryPart:'h-4 w-[250px]',
        tertiaryPart:'h-4 w-[200px]'
    }
};