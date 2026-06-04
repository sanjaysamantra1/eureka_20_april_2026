import addition, { mul, sub } from "../../utils/math.utils";
import React from "react";
import DataBinding from "../databinding/databinding";
import DataBindingAssignments from "../databinding_assignments/DataBindingAssignments";
import ListDemo1 from "../listItem/ListDemo1";
import UserList from "../userlist/UserList";
import ProductList from "../productList/ProductList";
import EmployeeList from "../listItem/EmployeeList";
import TaskList from "../listItem/TaskList";
import PropsDemo1 from "../props/PropsDemo1";
import MyModal from "../props/MyModal";
import Counter from "../state/Counter";
import ProductList2 from "../productList/ProductList2";
import Demo1 from "../demo/Demo1";
import AdditionDemo1 from "../form/AdditionDemo1";
import AdditionDemo2 from "../form/AdditionDemo2";
import FormDemo1 from "../form/FormDemo1";
import FormDemo2 from "../form/FormDemo2";
import Folder from "../folder_explorer/Folder";
import folderData from "../folder_explorer/data.json";
import UserList_Http from "../http/UserList_Http";
import CommentList_Http from "../http/CommentList_Http";
import ToDoList_Http from "../http/ToDoList_Http";
import Multiple_API from "../http/Multiple_API";
import EmployeeCRUD_Http from "../http/EmployeeCRUD_Http";
import UseEffectDemo1 from "../hooks/UseEffectDemo1";
import UserDetails from "../hooks/UserDetails";
import UseMemoTest from "../hooks/UseMemoTest";

function Body() {
  /*  console.log(addition(10, 20));
  console.log(sub(10, 20));
  console.log(mul(10, 20));
  console.log(React); */
  const f1FromBody = () => {
    console.log("I am f1 from Body Component");
  };

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
      {/* <TaskList /> */}
      {/* <PropsDemo1 name="Sanjay" msg="Good Morning" f1FromBody={f1FromBody} >
          <h3>Dynamic Content-1 From first Parent</h3>
          <h3>Dynamic Content-2 From first Parent</h3>
      </PropsDemo1> */}
      <hr />
      {/* <PropsDemo1 name="Sanjay" msg="Good Morning" >
          <h3>Dynamic Content-1 From second Parent</h3>
          <h3>Dynamic Content-2 From second Parent</h3>
      </PropsDemo1> */}
      {/* <MyModal>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s' />
      </MyModal> */}

      {/* <Counter /> */}
      {/* <ProductList2 /> */}
      {/* <Demo1 /> */}
      {/* <AdditionDemo1 /> */}
      {/* <AdditionDemo2 /> */}
      {/* <FormDemo1></FormDemo1> */}
      {/* <FormDemo2 /> */}
      {/* <Folder folderInfo={folderData} /> */}
      {/* <UserList_Http /> */}
      {/* <CommentList_Http /> */}
      {/* <ToDoList_Http/> */}
      {/* <Multiple_API/> */}
      {/* <EmployeeCRUD_Http /> */}
      {/* <UseEffectDemo1/> */}
      {/* <UserDetails /> */}
      <UseMemoTest/>
    </div>
  );
}
export default Body;
