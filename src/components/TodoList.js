import React, { useState } from "react";
import "../styles/styles.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [editTaskIndex, setEditTaskIndex] = useState(null);
  const [editTaskTitle, setEditTaskTitle] = useState("");
  const [editTaskDescription, setEditTaskDescription] = useState("");

  const handleAddTask = () => {
    if (!newTaskTitle.trim() || !newTaskDescription.trim()) return;
    setTasks([
      ...tasks,
      { title: newTaskTitle, description: newTaskDescription },
    ]);
    setNewTaskTitle("");
    setNewTaskDescription("");
  };

  const handleEditTask = (index) => {
    setEditTaskIndex(index);
    setEditTaskTitle(tasks[index].title);
    setEditTaskDescription(tasks[index].description);
  };

  const handleUpdateTask = () => {
    if (!editTaskTitle.trim() || !editTaskDescription.trim()) return;
    const updatedTasks = [...tasks];
    updatedTasks[editTaskIndex] = {
      title: editTaskTitle,
      description: editTaskDescription,
    };
    setTasks(updatedTasks);
    setEditTaskIndex(null);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <div className="add-task-section">
        <h2>Add New Task:</h2>
        <input
          type="text"
          placeholder="Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        ></textarea>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-list-section">
        <h2>Task List Display:</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <div>
                <strong>{task.title}</strong>
                <p>{task.description}</p>
              </div>
              <div>
                <button onClick={() => handleEditTask(index)}>Edit</button>
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {editTaskIndex !== null && (
        <div className="edit-task-section">
          <h2>Edit Task:</h2>
          <input
            type="text"
            placeholder="Title"
            value={editTaskTitle}
            onChange={(e) => setEditTaskTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={editTaskDescription}
            onChange={(e) => setEditTaskDescription(e.target.value)}
          ></textarea>
          <button onClick={handleUpdateTask}>Update Task</button>
        </div>
      )}
    </div>
  );
}

export default TodoList;
