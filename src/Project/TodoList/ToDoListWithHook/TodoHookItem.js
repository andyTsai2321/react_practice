import React from "react";

const ToDoHookItem = (props) => {
  return (
    <li key={props.index}>
      {props.content}
      <span className={props.style.delBtn} onClick={()=>props.handleItemDel(props.index)}>
        x
      </span>
    </li>
  );
};

export default ToDoHookItem;
