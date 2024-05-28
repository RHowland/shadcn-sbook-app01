import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"

export default function LabelDemo(props) {


const labelContents = props.labelContents;
const textSize = props.textSize;
const fontStyle = props.fontStyle;
const htmlFor = props.htmlFor;

  return (
    <div>
      <div className='flex items-center space-x-2'>
        <Checkbox id="terms" />
        <Label htmlFor={htmlFor} className={textSize+' '+fontStyle}>{labelContents}</Label>
      </div>
    </div>
  )
}