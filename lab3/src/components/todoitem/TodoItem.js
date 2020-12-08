import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const now = new Date();
  const dueDate = props.dueDate;
  const dateDifference = dueDate.getTime() - now.getTime();
  const daysLeft = Math.round(dateDifference / (1000 * 3600 * 24));

  return (
    <div className="todoItem">
      <div className="todoInfo">
        <span className="todoName">{props.text}</span>
        <span className="dueDate">{dueDate.toLocaleDateString()} {dueDate.toLocaleTimeString()}</span>
        <span className="daysLeft">{daysLeft > 0 ? daysLeft : 0}</span>
      </div>
      <input type="button" className="removeBtn" value="×" onClick={props.onRemoveClick}></input>
    </div>
  );
}

export default TodoItem;