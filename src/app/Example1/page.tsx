import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export default function ComponentExample1(props) {

  const buttonVariant= props.buttonVariant;
  const padding = props.padding;
  const text = props.text;
  const lineHeight = props.lineHeight;
  const width = props.width;
  const border = props.border;

  return (
    <Card className={`sm:col-span-2 ${border}`}>
      <CardHeader className={padding}>
        <CardTitle>Your Orders</CardTitle>
        <CardDescription className={`${width} ${text} ${lineHeight}`}>
          Introducing Our Dynamic Orders Dashboard for Seamless Management and
          Insightful Analysis.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant={buttonVariant}>Create New Order</Button>
      </CardFooter>
    </Card>
  )
}
