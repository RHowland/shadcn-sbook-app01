import type { Meta, StoryObj } from '@storybook/react';
import Home from "./context-menu/page";


const meta: Meta<typeof Home> = {
  title: 'App/Page/Context-menu',
  component: Home,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Home>;

export const _Home: Story = {};