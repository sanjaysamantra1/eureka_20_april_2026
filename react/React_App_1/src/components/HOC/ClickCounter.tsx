import { useState } from "react";
import  CounterComponent from "./Counter_HOC";

/* export default function ClickCounter() {
 const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };  
  return <>
      <h2>In Click Counter Component - count is {count}</h2>
      <button onClick={increment}>Click me</button>
    </>
} */

function ClickCounter(props:any){
    return <button onClick={props.increment}> Clicked {props.count} Times</button>
}
export default CounterComponent(ClickCounter);