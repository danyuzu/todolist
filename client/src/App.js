import logo from './logo.svg';
import './App.css';
import React,{useState, useRef, useEffect} from 'react';
import Chore from './Chore';
import Addform from './Addform';
import axios from 'axios';
const  App =() =>{


  const [ backendData, setbackendData] = useState();

  // useEffect(()=>{
  // //   fetch("/api").then(response =>
  // // response.json()).then(data=> {setbackendData(data)})
  // //      console.log(backendData, "hola")


  // },[])
  const [chores, setchores] = useState(
    [
   
  ]
  )


//   fetch('/postRequest',{
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(chores.name, chores.id),
// }).then(r=>console.log(r,'registrada'))
  useEffect(()=>{
    axios.post('/postRequest', JSON.stringify({chores})).then(res=>console.log(res))
  },[chores])


;
const nextid= useRef(1);
const Addchore=(name) =>
{
  console.log(name)
  

  setchores(tasks =>[
 ...tasks,
  {
     name,
     id:nextid.current++,
    

     

  }
  ] )
}

const removechore=(id) =>
{
  axios.delete('/delete' + id).then(res=> console.log(res))
setchores(prev => prev.filter(p=> p.id !== id));
}
  return (
    <div className="App">
     <p>TO DO APP</p>
     <Addform
             Agrega={Addchore}
          />
     <div className="list">
     
    
    
    {chores.map(chores =>
                        
                        <Chore
                          name={chores.name}
                          id={chores.id}
                        delete={removechore}
                         
                        />
                      

                      )
                    }
                    
                    
                    
    </div>
</div>
  );
}

export default App;
