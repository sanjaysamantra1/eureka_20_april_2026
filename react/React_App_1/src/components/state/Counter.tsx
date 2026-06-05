import { useCallback, useState } from "react";
import UserCard from "../props/UserCard";

export default function Counter() {
  const [count, setCount] = useState(0);
  
  // a new instance of add function is created for every
  /* const add = (a:number,b:number)=>{
    console.log(`Addition of ${a} and ${b} is ${a+b}`)
  } */

  const add = useCallback((a:number,b:number)=>{
    console.log(`Addition of ${a} and ${b} is ${a + b}`);
  },[]);

  return <>
    <div className="border border-3 rounded-3 m-3 p-3 text-center">
        <h3>Count:{count}</h3>

        <button className="btn btn-warning" onClick={()=>setCount(count-1)}>
            Decrement
        </button>
        <button className="btn btn-danger mx-2" onClick={()=>setCount(0)}>
            Reset
        </button>
        <button className="btn btn-success" onClick={()=>{
            setCount((prevState)=>prevState+1); // async code 
            console.log('count: ',count);
        }}>Increment</button>


        <UserCard name="sanjay kumar" age={50} address='bangalore' add={add}></UserCard>
    </div>
  </>
}
