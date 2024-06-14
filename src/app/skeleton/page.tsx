import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonDemo(props) {

const allign = props.allign;    
const primaryPart = props.primaryPart;
const secondaryPart = props.secondaryPart;
const tertiaryPart = props.tertiaryPart;

  return (
    <div className={allign}>
    <Skeleton className={primaryPart} />
    <div className="space-y-2">
      <Skeleton className={secondaryPart} />
      <Skeleton className={tertiaryPart} />
    </div>
  </div>
  )
}