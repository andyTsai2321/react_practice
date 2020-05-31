import React, { Component } from "react";

import { Input, Button, List } from "antd";
import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDelItemAction,
} from "./store/actionCreators";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }
  handleStoreChange = () => {
    this.setState(store.getState());
  };
  handleInputChange = (e) => {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let inputLen = this.state.inputValue.replace(/(^\s*)|(\s*$)/g, "");
    if (inputLen.length === 0) return;
    const action = getAddItemAction();
    store.dispatch(action);
  };
  handleItemDel = (index) => {
    const action = getDelItemAction(index);
    store.dispatch(action);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={this.state.inputValue}
            style={{ width: "300px", marginRight: "10px" }}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleSubmit}>
            Enter
          </Button>
          <List
            style={{ width: "300px" }}
            bordered
            dataSource={this.state.list}
            renderItem={(item, idx) => (
              <List.Item>
                {item}
                <span
                  style={{ float: "right", fontSize: "16px" }}
                  onClick={() => this.handleItemDel(idx)}
                >
                  x
                </span>
              </List.Item>
            )}
          />
        </form>
      </div>
    );
  }
}

export default TodoList;
