import React from 'react';
import User from './User';
import './TodoItems.css';

function TodoItems(props) {
  return (
    <tr>
      <td>{props.data.title}</td>
      <User name={props.data.user.name} />
      <td>{`${props.data.completed}`}</td>
    </tr>
  );
}

export default TodoItems;