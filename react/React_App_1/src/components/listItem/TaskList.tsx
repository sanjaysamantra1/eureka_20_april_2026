import { useState } from "react";

export default function TaskList() {
  let tasks = [
    { id: 1, title: "Complete Angular assignment", completed: false },
    { id: 2, title: "Review pull requests", completed: true },
    { id: 3, title: "Prepare project report", completed: false },
    { id: 4, title: "Attend team meeting", completed: true },
    { id: 5, title: "Update documentation", completed: false },
  ];

  let [taskArr,setTaskArr] = useState(tasks);
  const updateChecked = ()=>{
    
  }
  const filterTasks = (selectedOption:string)=>{
        let filteredTasks; 
        if(selectedOption == 'all'){
            filteredTasks = [...tasks];
        }else if(selectedOption=='completed'){
            filteredTasks = tasks.filter(task=>task.completed)
        }else{
            filteredTasks = tasks.filter(task=>!task.completed)
        }
        setTaskArr([...filteredTasks]);
  }
 

  return <>
    <h3 className="text-center">Task List</h3>

    <select onChange={(e)=>filterTasks(e.target.value)}>
        <option>all</option>
        <option>completed</option>
        <option>pending</option>
    </select>
    <ul>
        {taskArr.map(task=>{
            return <li key={task.id}>
                <input type="checkbox" checked={task.completed} onChange={updateChecked} />
                <span style={{textDecoration : task.completed?'line-through':'none'}}>{task.title} --- {task.completed.toString()}</span>
            </li>
        })}
    </ul>
  </>
}
