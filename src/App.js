import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskInput addTask={addTask} />
      <input type="text" placeholder="Search tasks..." value={searchTerm} onChange={handleSearch} />
      <TaskList 
        tasks={filteredTasks} 
        deleteTask={deleteTask} 
        toggleTaskCompletion={toggleTaskCompletion} 
      />
    </div>
  );
}

export default App;
