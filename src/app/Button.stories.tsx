import type { Meta, StoryObj } from '@storybook/react';
import ButtonDemo from "./button/page";


const meta: Meta<typeof ButtonDemo> = {
  title: 'App/Page/Button',
  component: ButtonDemo,
  argTypes: {
    choice: {
      options: ['default','secondary','destructive','ghost','outline','link'],
      control: { type: 'radio' },
    },
    select:{
      options: ['lg','default','sm','icon'],
      control: {type: 'radio'},
    }
  },

parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ButtonDemo>;

export const _Primary: Story = {
  args:{
    displayedName:'Default',
    choice:'default',
    select:'default',
    className:'font-bold',
  }
};

export const _Secondary: Story = {
args:{
displayedName:'Secondary',  
choice:'secondary',
select:'default',
},
};

export const _Destructive: Story = {
  args:{
    displayedName:'Destructive',
    choice:'destructive',
    select:'default',
  }
};

export const _Ghost: Story = {
  args:{
    displayedName:'Ghost',
    choice:'ghost',
    select:'default',
  }
};

export const _Link: Story = {
  args:{
    displayedName:'Link',
    choice:'link',
    select:'default',
  }
};

export const _Outline: Story = {
  args:{
    displayedName:'Outline',
    choice:'outline',
    select:'default',
  }
};

export const _Icon: Story = {
  args:{
    displayedName:'Icon',
    choice:'destructive',
    select:'icon',
  }
};

export const _Small: Story = {
  args:{
    displayedName:'Small',
    choice:'destructive',
    select:'sm',
  }
};

export const _Medium: Story = {
  args:{
    displayedName:'Medium',
    choice:'destructive',
    select:'default',
  }
};

export const _Large: Story = {
  args:{
    displayedName:'Large',
    choice:'destructive',
    select:'lg',
  }
};
