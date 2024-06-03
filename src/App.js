import logo from './logo.svg';
import Result from './result';
import './App.css';
import {useState} from 'react';
const secretNum = Math.floor(Math.random()*100)+1; 
function App() {
  const[term,setTerm] = useState("")
  const handleChange = (e) =>{
    setTerm(e.target.value)
  }
  return (
    <div className="container">
      <div className="head">
        <label>Guess the number between 1 to 100</label>
      </div>
      <input id='term' type='text' name='term' onChange={handleChange}/>
      <Result secretNum={secretNum} term ={term}/>
    </div>
  );
}

export default App;
