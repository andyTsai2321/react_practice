import React, { Component } from "react";

class checkbox extends Component {
  state = {
    gender: "male",
    like: {
      male: false,
      female: false,
    },
  };
  onChangeGender = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };
  onChangeLike = (e) => {
    const key = e.target.value; //male or female
    this.setState({
      like: {
        ...this.state.like,
        [key]: !this.state.like[key],
      },
    });
  };
  render() {
    const { gender, like } = this.state;
    return (
      <div>
        <input
          type="radio"
          value="male"
          onChange={this.onChangeGender}
          checked={gender === "male"}
        ></input>
        <label>Male</label>

        <input
          type="radio"
          value="female"
          onChange={this.onChangeGender}
          checked={gender === "female"}
        ></input>
        <label>Female</label>
        <hr />
        <input
          type="checkbox"
          value="male"
          onChange={this.onChangeLike}
          checked={like.male}
        />
        <label>Male</label>

        <input
          type="checkbox"
          value="female"
          onChange={this.onChangeLike}
          checked={like.female}
        />
        <label>Female</label>
        <hr />
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

export default checkbox;
