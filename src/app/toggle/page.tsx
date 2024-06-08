import { Bold } from "lucide-react"
import { Italic } from "lucide-react"
import { Underline } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export default function ToggleDemo(props) {

    const toggleVariant = props.toggleVariant;
    const ariaLabel = props.ariaLabel;
    const className = props.className;
 
    
    return (
    <Toggle variant={toggleVariant} aria-label={ariaLabel}>
      <Bold className={className} />
    </Toggle>
  )
}
