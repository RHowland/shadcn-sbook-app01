import type { Meta, StoryObj } from '@storybook/react';
import ToggleDemo from "./toggle/page";


const meta: Meta<typeof ToggleDemo> = {
  title: 'App/Page/Toggle',
  component: ToggleDemo,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ToggleDemo>;

export const Primary: Story = {
args:{
    
    toggleVariant:'default',
    ariaLabel:'Toggle bold',
    className:'h-4 w-4',

}
};

export const Outline: Story = {
args:{
    
    toggleVariant:'Outline',
    ariaLabel:'toggle italic',
    className:'h-4 w-4',

}
};

export const Small: Story = {
args:{
    
    toggleVariant:'Default',
    ariaLabel:'default',
    className:'h-4 w-4',

}
};