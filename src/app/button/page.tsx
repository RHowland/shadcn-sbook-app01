
import { Button } from "@/components/ui/button"

export default function ButtonDemo(props) {
const choice = props.choice;
const select = props.select;

return (
<Button variant={choice} size={select}>Button</Button>
);
}



  


