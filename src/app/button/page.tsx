
import { Button } from "@/components/ui/button"

export default function ButtonDemo(props) {
const choice = props.choice;
const select = props.select;
const displayedName = props.displayedName;
const className = props.className;

return (
<Button variant={choice} size={select} className={className}>{displayedName}</Button>
);
}



  


