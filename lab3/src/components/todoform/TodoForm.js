import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm(props) {
  const isoNow = new Date().toISOString();

  const [text, setText] = useState('');
  const [datetime, setDatetime] = useState(isoNow.substring(0, isoNow.length - 1));

  const isDataValid = () => {
    return text.length > 3 && datetime.length > 0;
  }

  const onTextChange = (event) => {
    const newValue = event.target.value;
    setText(() => newValue);
  }

  const onDateTimeChange = (event) => {
    const newValue = event.target.value;
    setDatetime(() => newValue);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(text, datetime);
  }

  return (
    <form className="todoForm" onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        onChange={onTextChange}
        className="textInput"
        placeholder="Text"
        required={true}
        minLength={3}
      />

      <input
        type="datetime-local"
        value={datetime}
        onChange={onDateTimeChange}
        className="dateInput"
        required={true}
      />

      <input
        type="submit"
        value="Додати запис"
        className="submitBtn butt"
        disabled={!isDataValid()}
      />
    </form>
  );
}

export default TodoForm;