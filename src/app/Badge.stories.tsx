import type { Meta, StoryObj } from '@storybook/react';
import BadgeDemo from './badge/page';


const meta: Meta<typeof BadgeDemo> = {
  title: 'App/Page/Badge',
  component: BadgeDemo,
  argTypes: {
    choice: {
      options: ['default','secondary','destructive','ghost','outline','link'],
      control: { type: 'radio' },
    },
    
  },

parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof BadgeDemo>;

export const Primary: Story = {
  args:{
      
      displayedName:'Default',
      choice:'default',
      className:'font-bold',
  
  }
  };
  
  export const Secondary: Story = {
  args:{
     displayedName:'Secondary',  
     choice:'secondary',
     
  }
  };
  
  export const Tertiary: Story = {
  args:{
     displayedName:'Destructive',  
     choice:'destructive',
     
  }
  };