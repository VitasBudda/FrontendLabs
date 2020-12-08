import React from 'react';
import TodoItem from '../todoitem/TodoItem';
import './TodoList.css';

function TodoList(props) {
  return (
    <div className="todoList">
      <div className="hintItem">
        <div className="hintInfo">
          <span className="todoName">Task</span>
          <span className="dueDate">Due date</span>
          <span className="daysLeft">Days left</span>
        </div>
        <div className="mrg"></div>
      </div>
      
      {props.taskList.map(task =>
        <TodoItem
          key={task.id}
          text={task.text}
          dueDate={task.dueDate} 
          onRemoveClick={() => props.onRemoveTask(task)} />
      )}
    </div>
  );
}

export default TodoList;