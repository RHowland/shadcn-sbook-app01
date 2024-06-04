import type { Meta, StoryObj } from '@storybook/react';
import Home from "./alert-dialog/page";


const meta: Meta<typeof Home> = {
  title: 'App/Page/Alert-dialog',
  component: Home,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Home>;

export const _Home: Story = {};