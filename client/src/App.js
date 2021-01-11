
import {React,useState,useEffect} from 'react';
import logo from './images/logo.png';
import './App.css';

function App() {
  const [state,setstate]=useState([])
  useEffect(() => {
    fetch(`http://localhost:4000/api/users`)
    
    .then(response => response.json())
    
    .then(data=>{
      console.log(data)
      setstate(data)
    })
      .catch(e=>console.log(e))
   
  }, [])
 
  return (
    <div className="App-header">
     <img src={logo} className="App-logo"/>
    {state.map(item=>(
      <ul style={{listStyle:"none"}}>
        <li key={item.id} className="App-link ">
          {item.name}
        </li>
      </ul>
    ))}
    {/* {state.name} */}
    </div>
  );
}

export default App;
