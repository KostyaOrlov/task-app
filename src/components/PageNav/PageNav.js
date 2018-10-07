import React, { Component } from "react";
import "./PageNav.css";

export default class PageNav extends Component {
  handlePageChange = id => {
    this.props.handlePageChange(id);
  };
  render() {
    const { pagesCount, currentpage } = this.props;
    const arr = [];
    for (let i = 1; i <= pagesCount; i++) {
      arr.push(i);
    }

    return (
      <div className="page-nav-container">
        Pages:
        {arr.map(item => (
          <span
            className={
              currentpage === item ? "page-num page-num-active" : "page-num"
            }
            key={item}
            onClick={() => this.handlePageChange(item)}
          >
            {item}
          </span>
        ))}
      </div>
    );
  }
}
