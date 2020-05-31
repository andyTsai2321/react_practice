import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
  render() {
    return (
      <div className="all-container">
        <Router>
          <main>
            <div className="title">React學習之路 - 練手小項目集合</div>
            <Menu mode="horizontal">
              <Menu.Item>
                <Link to="/TodoList">TodoList</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/ListFilter">列表過濾</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/TicTacToeGame">井字遊戲</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/Checkbox">Checkbox</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/FileNode">檔案樹</Link>
              </Menu.Item>
              <Menu.Item>
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
          <footer>
            Andy Tsai{" "}
            <a href="#" target="_blank">
              Souce Code
            </a>
          </footer>
        </Router>
      </div>
    );
  }
}

export default Home;
