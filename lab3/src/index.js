import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './components/app/TodoApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
