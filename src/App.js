import './App.css';
import { useState } from 'react';
import { TaskForm } from './components/taskForm';
import { TaskList } from './components/taskList';

function App() {
  const [todo, setToDo] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleChange(e) {
      setToDo(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    if (!todo) return;
    setTaskList(taskList.concat(todo));

    setToDo("");
    document.getElementById("taskform").reset();
  }
  
  function handleCheck(e) {
    if (e.target.className.length === 0){
      e.target.className = "strikeThrough";
    } else {
      e.target.className = "";
    }
  }

  const removeTask = index => {
    const newTaskList = [...taskList];
    newTaskList.splice(index,1);
    setTaskList(newTaskList);
  }
   
  const task = taskList.map((task,index) => 
      <TaskList 
        key={`${task}-${index}`}
        taskId={`${index.task}`}
        task={task}
        handleCheck={handleCheck}
        handleRemove={() => removeTask(index)}
      />
    );
  
                                            
  return (
    <div>
      <TaskForm handleChange={handleChange}
                handleSubmit={handleSubmit}/>
      <ul className="center-div">
        {task}
      </ul>
    </div>
  )
}

export default App;
