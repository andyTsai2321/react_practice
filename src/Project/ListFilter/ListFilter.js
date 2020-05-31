import React, { Component } from "react";
import lesson from "./lesson.json";

class ListFilter extends Component {
  state = {
    filter: "",
    lesson: lesson,
  };

  onChangeFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { filter, lesson } = this.state;
    const filerLesson = lesson.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()))
    return (
      <div>
        <input value={filter} onChange={this.onChangeFilter} />
        {filerLesson.map(item => (
            <div>{item.title}</div>
        ))}
      </div>
    );
  }
}

export default ListFilter;
