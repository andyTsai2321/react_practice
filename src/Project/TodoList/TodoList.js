import React, { Component } from "react";
import { Tabs } from "antd";
import TodoListNormal from "./ToDoListeNormal/TodoListNormal";
import TodoListWithRedux from "./TodoListWithRedux/TodoList";
const { TabPane } = Tabs;
class TodoList extends Component {
    
  render() {
    return (
      <Tabs defaultActiveKey="1" animated={false}>
        <TabPane tab="一般" key="1">
          <TodoListNormal/>
        </TabPane>
        <TabPane tab="使用Redux" key="2">
          <TodoListWithRedux/>
        </TabPane>
      </Tabs>
    );
  }
}

export default TodoList;
