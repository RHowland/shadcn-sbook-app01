import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"

export default function LabelDemo(props) {


const labelContents = props.labelContents;
const textSize = props.textSize;
const fontStyle = props.fontStyle;
const lineHeight = props.lineHight;

  return (
    <div>
      <div className='flex items-center space-x-2'>
        <Checkbox id="terms" />
        <Label htmlFor="terms" className={textSize+' '+fontStyle+' '+lineHeight}>{labelContents}</Label>
      </div>
    </div>
  )
}