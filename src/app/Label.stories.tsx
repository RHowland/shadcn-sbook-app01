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
      htmlFor:{
        options:['terms','email','picture'],
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
  htmlFor:'terms',
  labelContents:'our first props label',
 }
};
  
  export const _Default: Story = {

    args:{
      textSize:'text',
      fontStyle:'italic',
      htmlFor:'terms',
      labelContents:'our first props label',
     }
      
  };

  export const _Medium: Story = {
    args:{
      textSize:'text-base',
      fontStyle:'italic',
      htmlFor:'terms',
      labelContents:'our first props label',
     }
      
  };


  export const _Large: Story = {
    args:{
      textSize:'text-lg',
      fontStyle:'italic',
      htmlFor:'terms',
      labelContents:'our first props label',
     }
      
};

