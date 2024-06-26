import type { Meta, StoryObj } from '@storybook/react';
import ResizableDemo from "./resizable/page";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"


const meta: Meta<typeof ResizableDemo> = {
  title: 'App/Page/Resizable',
  component: ResizableDemo,
  argTypes:{
    directionPoint1:{
        options:['vertical','horizontal'],
        control: {type:'radio'}, 
    }
   
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ResizableDemo>;

export const Primary: Story = {

    argTypes:{  
        directionPoint2:{
        options: ['vertical','horizontal'],
        control: {type:'radio'}
      }
    },
    args:{
        directionPoint1:'horizontal',
        directionPoint2:'vertical',

    }
};

export const Secondary: Story = {
    args:{
        directionPoint1:'horizontal',
        

    },
    render:({directionPoint1}) => (
        <ResizablePanelGroup
        direction={directionPoint1}
        className="min-h-[200px] max-w-m rounded-lg border"
      >
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Header</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
};

export const Tertiary: Story = {
    args:{
        directionPoint1:'horizontal',
        

    },
    render:({directionPoint1})=>(
        <ResizablePanelGroup
        direction={directionPoint1}
        className="min-h-[200px] max-w-md rounded-lg border"
      >
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
};