import type { Meta, StoryObj } from '@storybook/react';
import CalendarDemo from "./calendar/page";


const meta: Meta<typeof CalendarDemo> = {
  title: 'App/Page/CalendarDemo',
  component: CalendarDemo,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CalendarDemo>;

export const _Home: Story = {
  /*args:{
    dayButton:'Outline',
    navigationButton:'Default',
    border:'rounded',
  }*/
};