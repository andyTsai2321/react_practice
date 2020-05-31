import React, { Component } from "react";
import Course from "./Course";

const api = "https://api.hiskio.com/v1/courses?profession_id=1";
class InfiniteScroll extends Component {
  state = {
    courses: [],
    next: null,
    loading: true,
  };

  componentDidMount() {
    this.fetchData(api);
    window.addEventListener("scroll", this.onScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }
  onScroll = () => {
    const { next, loading } = this.state;
    if (loading) return;
    if (!next) return;
    // window.scrollY //捲到哪
    // window.innerHeight //視窗高度
    // document.body.scrollHeight; //總共可以捲多高
    if (
      window.scrollY + window.innerHeight >=
      document.body.scrollHeight - 100
    ) {
      console.log(next);
      this.fetchData(next);
    }
  };

  fetchData = (url) => {
    this.setState({
      loading: true,
    });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          //舊+新
          courses: [...this.state.courses, ...data.data],
          next: data.links.next,
          loading: false,
        });
      });
  };

  render() {
    const { courses, next, loading } = this.state;
    return (
      <div>
        {courses.map((courses) => (
          <Course key={courses.id} {...courses} />
        ))}
        <h3>{loading || next ? "" : "沒資料了"}</h3>
      </div>
    );
  }
}

export default InfiniteScroll;
