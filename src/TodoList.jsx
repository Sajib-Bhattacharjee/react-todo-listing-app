import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    "Sajib Bhattacharjee",
    "Fatema Zahan Shayla",
    "Sadiya Zahan Shapla",
  ]);

  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    // Trim the new task to remove leading/trailing whitespace
    const trimmedTask = newTask.trim();

    // Check if the trimmed task is not an empty string
    if (trimmedTask !== "") {
      // Spread the existing tasks array and add the trimmed task
      setTasks((tasks) => [...tasks, trimmedTask]);
    } else {
      // Handle the case where the task is empty (optional)
      console.warn("Please enter a task description.");
      alert("Please enter a task description.");
    }

    setNewTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="container">
      <h1>Todo List App</h1>

      <div className="container-main">
        <input
          type="text"
          placeholder="Enter a task "
          value={newTask}
          onChange={handleInputChange}
          className="input-text"
        />

        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-btn" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="move-btn" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
