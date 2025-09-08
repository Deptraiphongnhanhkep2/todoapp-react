import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newInputTask, setNewInputTask] = useState("");

  function handleInputChange(e) {
    setNewInputTask(e.target.value);
  }

  function addTask() {
    if (newInputTask.trim() !== "") {
      setTasks((t) => [...t, newInputTask]);
      setNewInputTask("");
    }
  }

  function doneTask(index) {
    const newTasksList = tasks.filter((_, i) => i !== index);
    setTasks(newTasksList);
  }

  function moveUp(index) {
    if (index > 0) {
      const newTasksList = [...tasks];
      [newTasksList[index], newTasksList[index - 1]] = [
        newTasksList[index - 1],
        newTasksList[index],
      ];
      setTasks(newTasksList);
    }
  }
  function moveDown(index) {
    if (index < tasks.length - 1) {
      const newTasksList = [...tasks];
      [newTasksList[index], newTasksList[index + 1]] = [
        newTasksList[index + 1],
        newTasksList[index],
      ];
      setTasks(newTasksList);
    }
  }
  return (
    <>
      <div className="bg-black min-h-screen pt-44">
        <div className="text-center ">
          <div className="items-center text-center mb-1.5">
            <h1 className="text-white font-bold text-5xl mb-1.5">To-do-list</h1>
            <input
              className="bg-white px-3 py-2 rounded-lg mr-1.5"
              type="text"
              placeholder="Enter a task..."
              onChange={handleInputChange}
              value={newInputTask}
            />
            <button
              onClick={addTask}
              className="bg-green-400 text-white px-2 py-1 rounded-2xl hover:bg-green-800"
            >
              Add
            </button>
          </div>
          <ul className="max-w-lg m-auto p-0 flex flex-col items-center justify-between">
            {tasks.map((task, i) => (
              <li key={i}>
                <span className="flex-1 truncate">{task}</span>
                <div className="flex gap-1.5 items-center justify-around">
                  <button
                    onClick={() => doneTask(i)}
                    className="bg-green-400 hover:bg-green-900"
                  >
                    Done
                  </button>
                  <button onClick={() => moveUp(i)} className="bg-blue-400">
                    Move up
                  </button>
                  <button onClick={() => moveDown(i)} className="bg-blue-400">
                    Move Down
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
