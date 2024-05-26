import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import type { Meta, StoryObj } from '@storybook/react';  

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