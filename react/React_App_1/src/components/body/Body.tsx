import addition, { mul, sub } from "../../utils/math.utils";
import React from "react";
import DataBinding from "../databinding/databinding";
import DataBindingAssignments from "../databinding_assignments/DataBindingAssignments";
import ListDemo1 from "../listItem/ListDemo1";
import UserList from "../userlist/UserList";
import ProductList from "../productList/ProductList";
import EmployeeList from "../listItem/EmployeeList";
import TaskList from "../listItem/TaskList";

function Body() {
  console.log(addition(10, 20));
  console.log(sub(10, 20));
  console.log(mul(10, 20));
  console.log(React);

  return (
    <div className="myBody" style={{ minHeight: "300px" }}>
      {/* <div>This is Body Component</div> */}
      {/* <div>My react version is:: {React.version}</div> */}
      {/* <DataBinding /> */}
      {/* <DataBindingAssignments /> */}
      {/* <ListDemo1 /> */}
      {/* <UserList /> */}
      {/* <ProductList></ProductList> */}
      {/* <EmployeeList /> */}
      <TaskList />
    </div>
  );
}
export default Body;
