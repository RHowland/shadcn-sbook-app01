import type { Meta, StoryObj } from '@storybook/react';
import Home from "./badge/page";


const meta: Meta<typeof Home> = {
  title: 'App/Page/Badge',
  component: Home,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Home>;

export const _Home: Story = {};