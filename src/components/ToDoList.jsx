import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([""]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addNewTask() {
    setTasks((t) => [...t, newTask]);
    setNewTask("");
  }

  return (
    <>
      <div className="font-arial text-center items-center mt-50">
        <h1 className="text-6xl">To Do List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter A Task"
            value={newTask}
            onChange={handleInputChange}
          />
          <button onClick={addNewTask}> Add </button>
        </div>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button>Done</button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
