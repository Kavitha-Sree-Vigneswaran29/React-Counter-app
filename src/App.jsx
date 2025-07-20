import {useState} from 'react';
import './App.css'
function App(){
  const [count, setcount]=useState(0);
  return(
    <div className="App">
      <div className="demo">
        <h1>Counter App</h1>
        <p>Count :  {count}</p>
        <button onClick={()=>setcount(count+1)}>INCREASE</button>
        <button onClick={()=>setcount(count-1)}>DECREASE</button>
        <button onClick={()=>setcount(0)}>RESET</button>
      </div>
    </div>
  );
}
export default App