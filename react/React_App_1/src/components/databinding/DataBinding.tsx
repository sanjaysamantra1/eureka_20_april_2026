import { useState } from "react";

export default function DataBinding() {
  let count = 0; // Not a State Variable ( Local Variable)
  const increment = () => {
    count = count + 1;
    console.log(`Count: ${count}`);
  };

  let [myCount, updateMyCount] = useState(0); // State Variable
  const incrementCount = () => {
    updateMyCount(myCount++);
  };

  let [name, setName] = useState("Sanjay"); // name is state variable

  let [num, setNum] = useState(2); // num is state variable

  return (
    <>
      <h3 className="text-center">Lets learn Data Binding</h3>

      <div className="border border-3 rounded-3 p-3 m-3">
        <div>Local variable count:{count}</div>
        <button className="btn btn-primary" onClick={increment}>
          Increment
        </button>
      </div>

      <div className="border border-3 rounded-3 p-3 m-3">
        <div>State variable MyCount:{myCount}</div>
        <button className="btn btn-primary" onClick={incrementCount}>
          Increment
        </button>
      </div>

      <div className="border border-3 rounded-3 p-3 m-3">
        <div>2 way Binding:</div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <div>Name is(1-way):{name}</div>
      </div>

      <div className="border border-3 rounded-3 p-3 m-3">
        <div>Even or Odd::</div>
        <input type="number" value={num} onChange={(e) => setNum(+e.target.value)} />
        
        { num%2 ==0 ? <div>{num} is even Number</div> : <div>{num} is odd Number</div>}
      </div>
    </>
  );
}
