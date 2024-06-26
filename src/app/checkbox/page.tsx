import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"

export default function CheckboxDemo(props) {

const disableCheckbox = props.disableCheckbox;
const CheckboxSize = props.CheckboxSize;
const labelContents = props.labelContents;
const CheckboxStyle = props.CheckboxStyle;

  return (
    <div>
      <div className='flex items-center space-x-2'>
        <Checkbox id="terms" disabled={disableCheckbox} className={CheckboxSize+' '+CheckboxStyle}/>
        <Label htmlFor="terms">{labelContents}</Label>
      </div>
    </div>
  )
}
