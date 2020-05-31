import React, { Component, Fragment } from "react";
import ToDoItem from "./TodoListItem";
import style from "./style.module.css";
import { Input, Button } from "antd";

class TodoListNormal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
    };
  }
  onChangeText = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  submit = (e) => {
    e.preventDefault();
    let inputLen = this.state.inputValue.replace(/(^\s*)|(\s*$)/g, "");
    if (inputLen.length === 0) return;
    this.setState({
      inputValue: "",
      list: [this.state.inputValue, ...this.state.list],
    });
  };
  handleItemDel = (index) => {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      inputValue: "",
      list: list,
    });
  };

  getTodoItem = () => {
    return this.state.list.map((item, index) => (
      <ToDoItem
        content={item}
        index={index}
        itemDel={this.handleItemDel}
        style={style}
      />
    ));
  };

  render() {
    const { inputValue, list } = this.state;
    return (
      <div className={style.todoWrap}>
        <form className={style.formWrap} onSubmit={this.submit}>
          <div className={style.inputBox}>
            <Input
              placeholder="輸入內容"
              value={inputValue}
              onChange={this.onChangeText}
            />
          </div>
          <Button type="submit" onClick={this.submit}>
            Enter
          </Button>
        </form>

        <ul>{this.getTodoItem()}</ul>
      </div>
    );
  }
}

export default TodoListNormal;
