import React, { Component } from "react";
import PropTypes from "prop-types";

class ToDoItem extends Component {
  handleItemDel = () => {
    this.props.itemDel(this.props.index);
  };

  render() {
    return (
      <li key={this.props.index}>
        {this.props.content}
        <span className={this.props.style.delBtn} onClick={this.handleItemDel}>
          x
        </span>
      </li>
    );
  }
}
ToDoItem.propTypes = {
  content: PropTypes.string,
  itemDel: PropTypes.func,
  index: PropTypes.number,
};

export default ToDoItem;
