
import { Badge } from "@/components/ui/badge"

export default function BadgeDemo(props) {
  const choice = props.choice;
  const displayedName = props.displayedName;
  const className = props.className;
  
  return (
  <Badge variant={choice} className={className}>{displayedName}</Badge>
  );
  }

