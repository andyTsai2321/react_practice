import React, { useState, useEffect, useRef } from "react";
import ToDoHookItem from "./TodoHookItem";
import style from "./style.module.css";
import { Input, Button } from "antd";

const TodoListHook = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    let inputLen = text.replace(/(^\s*)|(\s*$)/g, "");
    if (inputLen.length === 0) return;
    setItems([...items, text]);
    setText("");
  };
  const handleItemDel = (index) => {
    const list = [...items];
    list.splice(index, 1);
    setItems(list);
    setText("");
  };
  const getTodoItem = () => {
    if (items < 1) return;
    return items.map((item, index) => (
      <ToDoHookItem
        handleItemDel={handleItemDel}
        content={item}
        index={index}
        style={style}
      />
    ));
  };
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  });
  return (
    <div className={style.todoWrap}>
      <form className={style.formWrap} onSubmit={submit}>
        <div className={style.inputBox}>
          <Input placeholder="輸入內容" value={text} onChange={onChangeText} ref={ref} />
        </div>
        <Button type="submit" onClick={submit}>
          Enter
        </Button>
      </form>

      <ul>{getTodoItem()}</ul>
    </div>
  );
};

export default TodoListHook;
