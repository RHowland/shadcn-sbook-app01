
import { Button } from "@/components/ui/button"

export default function ButtonDemo(props) {
const choice = props.choice;
const select = props.select;
const displayedName = props.displayedName;

return (
<Button variant={choice} size={select}>{displayedName}</Button>
);
}



  


