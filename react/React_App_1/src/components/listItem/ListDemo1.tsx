import React from "react";

export default function ListDemo1() {
  let carArr = ["Tata", "Honda", "Maruti", "Hyundai", "Toyota"];

  return <>
    <h3>Car List:</h3>
    <ul>
        {carArr.map((car,ind)=>{
            return <li key={ind}>{car}</li>
        })}        
    </ul>
  </>
}
