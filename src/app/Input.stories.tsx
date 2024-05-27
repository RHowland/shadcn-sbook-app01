import type { Meta, StoryObj } from '@storybook/react';
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";

const meta: Meta<typeof Input> = {
  title: 'App/Page/Input',
  component: Input,
  argTypes: {},

parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};



export default meta;
type Story = StoryObj<typeof Input>;

export const _Default: Story = {
    render:() => <Input type="email" placeholder="Email"/>
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
    render:() => (
        <Input disabled type="email" placeholder="Email"/>
    )
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







