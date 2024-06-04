import type { Meta, StoryObj } from '@storybook/react';
import InputDemo from "./input/page";

const meta: Meta<typeof InputDemo> = {
  title: 'App/Page/Input',
  component: InputDemo,
  argTypes: {
    type:{
        options:['email','file'],
        control:{type:'radio'},
    },
    height:{
        options:['h-5','h-6','h-7','h-8','h-9','h-10'],
        control:{type:'radio'},
    },
    width:{
        options:['w-1/4','w-2/4','w-3/4','w-full'],
        control:{type:'radio'},
    }
   },

parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};



export default meta;
type Story = StoryObj<typeof InputDemo>;

export const _Default: Story = {
    args:{
        type:'email',
        height:'h-5',
        width:'w-full',
        disabled:false,
    }
};

export const _File: Story = {
    render:() => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" />
        </div>
    )
};

export const _Disabled: Story = {
    args:{
        type:'email',
        height:'h-10',
        width:'w-full',
        disabled:true,
    }
};

export const _WithLabel: Story = {
    render:() => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Email" />
        </div>
    )
};

export const _WithButton: Story = {
    render:() => (
        <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
        </div>
    )
};







