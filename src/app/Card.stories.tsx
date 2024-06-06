import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import type { Meta, StoryObj } from '@storybook/react';
import ButtonDemo from "./button/page";
import InputDemo from "./input/page";  
import CheckboxDemo  from "./checkbox/page";
import  LabelDemo  from "./label/page";

const meta: Meta<typeof Card> = {
    title: 'App/Page/Card',
    component: Card,
    argTypes: {},
  
  parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
  };
  
  export default meta;
  type Story = StoryObj<typeof Card>;

  export const _Default: Story = {
    render:() => (
        <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

    )
};

export const _withButton: Story = {
  render:() => (
      <Card>
<CardHeader>
  <CardTitle>Card Title</CardTitle>
  <CardDescription>Card Description</CardDescription>
</CardHeader>
<CardContent>
  <p>Card Content</p>
</CardContent>
<CardFooter>
  <ButtonDemo choice='default' displayedName='CardButton'/>
  </CardFooter>
</Card>

  )
};

export const _withInput: Story = {
  render:() => (
      <Card>
<CardHeader>
  <CardTitle>Card Title</CardTitle>
  <CardDescription>Card Description</CardDescription>
</CardHeader>
<CardContent>
<InputDemo type='email' placeholder="Email"/>
</CardContent>
<CardFooter>
  <ButtonDemo choice='default' displayedName='CardButton'/>
  </CardFooter>
</Card>

  )
};

export const _withCheckbox: Story = {
  render:() => (
      <Card>
<CardHeader>
  <CardTitle>Card Title</CardTitle>
  <CardDescription>Card Description</CardDescription>
</CardHeader>
<CardContent>
<InputDemo type='email' placeholder="Email"/>
</CardContent>
<CardFooter>
<LabelDemo/>
  </CardFooter>
  
</Card>

  )
};