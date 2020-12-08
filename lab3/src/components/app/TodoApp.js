import React, { useState } from 'react';
import TodoForm from '../todoform/TodoForm';
import TodoList from '../todolist/TodoList';
import './TodoApp.css';

const initialTaskList = [];

function TodoApp() {
  const [taskList, setTaskList] = useState(initialTaskList);

  const onRemoveTask = (task) => {
    setTaskList(taskList => taskList.filter(item => item !== task));
  }

  const onFormSubmit = (text, datetime) => {
    const task = {
      id: taskList.length > 0 ? taskList[taskList.length - 1].id + 1 : 0,
      text: text,
      dueDate: new Date(datetime)
    };

    setTaskList([...taskList, task]);

    fetch('http://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  return (
    <div className="app">
      <div className="todoContainer">
        <TodoList
          taskList={taskList}
          onRemoveTask={onRemoveTask} />

        <TodoForm onFormSubmit={onFormSubmit} />
      </div>
    </div>
  );
}

export default TodoApp;
