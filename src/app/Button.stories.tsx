import type { Meta, StoryObj } from '@storybook/react';
import ButtonDemo from "./button/page";


const meta: Meta<typeof ButtonDemo> = {
  title: 'App/Page/Button',
  component: ButtonDemo,
  argTypes: {
    variant: {
      options: ['secondary','destructive','ghost','outline','sm','lg','default','icon'],
      control: { type: 'radio' },
    },
  },

parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ButtonDemo>;

export const _Primary: Story = {};

export const _Secondary: Story = {
args:{
choice:'destructive',
},
render:({choice}) => <ButtonDemo choice= {choice}/>,
};

export const _Destructive: Story = {
  render:() => <ButtonDemo choice="destructive"/>
};

export const _Ghost: Story = {
  render:() => <ButtonDemo choice="ghost"/>
};

export const _Link: Story = {
  render:() => <ButtonDemo choice="link"/>
};

export const _Outline: Story = {
  render:() => <ButtonDemo choice="outline"/>
};

export const _Icon: Story = {
  render:() => <ButtonDemo select="icon"/>
};

export const _Small: Story = {
  render:() => <ButtonDemo select="sm"/>
};

export const _Medium: Story = {
  render:() => <ButtonDemo select="default"/>
};

export const _Large: Story = {
  render:() => <ButtonDemo select="lg"/>
};
