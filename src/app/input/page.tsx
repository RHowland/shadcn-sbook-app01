import { Input } from "@/components/ui/input";

export default function InputDemo(props){
   
    const type = props.type;
    const disabled = props.disabled;
    const height = props.height;
    const width = props.width;

    return(
        <Input type={type} disabled={disabled} placeholder='Email' className={height+' '+width}/>
    );
}