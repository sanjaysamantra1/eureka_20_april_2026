import { useState } from "react";
import CounterComponent from "./Counter_HOC";
/* export default function HoverCounter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return <>
      <h2>In HoverCounter Component - count is {count}</h2>
      <button onMouseEnter={increment}>Click me</button>
    </>
} */

function HoverCounter(props:any){
    return <button onMouseOver={props.increment}> Clicked {props.count} Times</button>
}
export default CounterComponent(HoverCounter);
