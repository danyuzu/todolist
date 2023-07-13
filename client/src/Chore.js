

import React,{useState} from "react";
import './Chore.css';


const Chore =(props) =>
{
 const [value, setvalue]= useState('show-overlay');
    
return(

       
    
<div className="item" key={props.id} maxlenght="5">

 {props.name.slice(0, 30)+ "..."}
 
 <div className="btn-container">
 <button onClick={() => props.delete(props.id)} className="delete">✖</button>
 <button onClick={(p) => setvalue(p.value = 'open-modal')} className='delete' >More</button>
 </div>

 <p>{props.time}</p>

<div className={`mod-container + ${value}`}>
 <div className={`show-overlay`}>


{   
    props.name}
    <button onClick={(p) => setvalue(p.value= 'mod-container')} className="delete">✖</button>
</div>
 
   </div>
   
   </div>
   
   

 




);

}

export default Chore;