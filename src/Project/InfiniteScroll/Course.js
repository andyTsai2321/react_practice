import React, { Component } from "react";
import style from "./Course.module.css";

class Course extends Component {
  render() {
    const { title, subtitle, image } = this.props;
    return (
      <div className={style.course}>
        <div
          className={style.cover}
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
        ]{" "}
        <div className={style.info}>
          <h1>{title}</h1>
          <h1>{subtitle}</h1>
        </div>
      </div>
    );
  }
}

export default Course;
