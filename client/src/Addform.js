import React,{useState, useRef} from "react";
import  "./Add.css";



const Addform =(props) =>
{

const [value, setvalue] = useState("");

const input=useRef();

const cambio=(event) =>
{
    event.preventDefault();
    
    if(value != '')
    {
        props.Agrega(value);
        setvalue("");
    }
   
}

    return(

<form onSubmit={(event)=>cambio(event)} className="forma">

<input value={value} ref={input} placeholder="Add task" className="input" onChange={(p)=>setvalue(p.target.value)}/>
<button value='add player'  className="addplayer" type="submit" ref={input}>SUBMIT</button>

     
</form>
)

}
export default Addform;