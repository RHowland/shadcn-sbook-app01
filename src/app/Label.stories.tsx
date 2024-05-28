import type { Meta, StoryObj } from '@storybook/react';
import  LabelDemo  from "./label/page"




const meta: Meta<typeof LabelDemo> = {
    title: 'App/Page/Label',
    component: LabelDemo,
    argTypes: {
      textSize:{
        options:["text-xs","text","text-base","text-lg"],
        control: {type:'radio'},
      },
      fontStyle:{
        options:['italic','non-italic'],
        control: {type:'radio'},
      },
      lineHeight:{
        options:['leading-none','leading-tight','leading-snug','leading-normal','leading-relaxed','leading-loose'],
        control: {type:'radio'},
      },
      
    },
  
  parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
  };
  
  
  
  export default meta;
  type Story = StoryObj<typeof LabelDemo>;
  
  export const _Small: Story = {
 args:{
  textSize:'text-xs',
  fontStyle:'non-italic',
  lineHeight:'leading-none',
  labelContents:'our first props label',
 }
};
  
  export const _Default: Story = {
      render:({className}) => (
<div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className={className}>Accept terms and conditions</Label>
      </div>
    </div>
      ),
  };

  export const _Medium: Story = {
    render:({className}) => (
  <div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" className={className}>Accept terms and conditions</Label>
    </div>
  </div>
    ),
  };


  export const _Large: Story = {
    render:({className}) => (
<div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" className={className}>Accept terms and conditions</Label>
    </div>
  </div>
    ),
};

