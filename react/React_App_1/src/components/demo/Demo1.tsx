// import React, { Component, PureComponent } from 'react'
// Demo1 is a Pure Component
// export default class Demo1 extends PureComponent {
//   render() {
//     return (
//       <div>Demo1 Component</div>
//     )
//   }
// }

import { useState } from "react";

export default function Demo1() {
  console.log("Demo-1 re-rendered...");

  const [name, setName] = useState("pavan");
  const updateName = () => {setName("pavan")};

  return (
    <>
      <div>This is Demo-1 Component</div>
      <div>Name is: {name}</div>
      <button onClick={updateName}>Update Name</button>
    </>
  );
}
