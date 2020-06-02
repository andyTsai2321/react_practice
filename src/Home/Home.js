import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  IndexRoute,
} from "react-router-dom";

import style from "./Home.css";
import { Menu } from "antd";

import Checkbox from "../checkbox";
import TodoList from "../Project/TodoList/TodoList";
import ListFilter from "../Project/ListFilter/ListFilter";
import TicTacToeGame from "../Project/TicTacToeGame/TicTacToeGame";

import InfiniteScroll from "../Project/InfiniteScroll/InfiniteScroll";

import FileNode from "../Project/FileNode/FileNode";
import file from "../Project/FileNode/file.json";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "TodoList",
    };
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <div className="all-container">
        <Router>
          <main>
            <div className="title">React學習之路 - 練手小項目集合</div>
            <Menu mode="horizontal" onClick={this.handleClick}>
              <Menu.Item key="TodoList">
                <Link to="/TodoList">TodoList</Link>
              </Menu.Item>
              <Menu.Item key="ListFilter">
                <Link to="/ListFilter">列表過濾</Link>
              </Menu.Item>
              <Menu.Item key="TicTacToeGame">
                <Link to="/TicTacToeGame">井字遊戲</Link>
              </Menu.Item>
              <Menu.Item key="Checkbox">
                <Link to="/Checkbox">Checkbox</Link>
              </Menu.Item>
              <Menu.Item key="FileNode">
                <Link to="/FileNode">檔案樹</Link>
              </Menu.Item>
              <Menu.Item key="InfiniteScroll">
                <Link to="/InfiniteScroll">無限滾動</Link>
              </Menu.Item>
            </Menu>

            {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
            <div className="mainWrap">
              <Switch>
                <Route path="/TodoList">
                  <TodoList />
                </Route>
                <Route path="/ListFilter">
                  <ListFilter />
                </Route>
                <Route path="/TicTacToeGame">
                  <TicTacToeGame />
                </Route>
                <Route path="/Checkbox">
                  <Checkbox />
                </Route>
                <Route path="/FileNode">
                  <FileNode {...file} />
                </Route>
                <Route path="/InfiniteScroll">
                  <InfiniteScroll />
                </Route>
              </Switch>
            </div>
          </main>
          <footer>Andy Tsai </footer>
        </Router>
      </div>
    );
  }
}

export default Home;
