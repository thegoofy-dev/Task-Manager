import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };
    addTask(newTask);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className='task-title'
        type="text" 
        placeholder="Enter task title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <select className="priority-label" value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button id="add-task" type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
