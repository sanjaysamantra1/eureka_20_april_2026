import addition, { mul, sub } from "../../utils/math.utils";
import React from 'react';
import DataBinding from "../databinding/databinding";

function Body(){
  console.log(addition(10,20));
  console.log(sub(10,20));
  console.log(mul(10,20));
  console.log(React)

  return <div className='myBody' style={{"minHeight":"300px"}}>
    {/* <div>This is Body Component</div> */}
    {/* <div>My react version is:: {React.version}</div> */}
    <DataBinding />
  </div>
}
export default Body;