import React, { Component } from "react";
import "./file.scss";

class FileNode extends Component {
  state = {
    open: true,
  };
  toggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  render() {
    const { name, files } = this.props;
    const { open } = this.state;
    if (!files) {
      return <li>{name}</li>;
    }
    return (
      <div>
        <div className={`folder ${open ? "open" : ""}`} onClick={this.toggle}>
          {name}
        </div>
        {!open ? null : (
          <ul>
            {files.map((file) => (
              <FileNode {...file} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default FileNode;
