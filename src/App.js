import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";
import PageNav from "./components/PageNav/PageNav";
import Login from "./components/Login/Login";
import loginInfo from "./loginInfo.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      totalCount: null,
      currentpage: 1,
      isAdmin: true
    };
  }
  componentDidMount() {
    this.getTasks(this.state.currentpage);
  }

  handlePageChange = id => {
    this.setState(
      {
        currentpage: id
      },
      this.getTasks(id)
    );
  };

  handleLogout = () => {
    this.setState({
      isAdmin: false
    });
  };

  handleLogin = (login, password) => {
    if (login === loginInfo.login && password === loginInfo.password) {
      this.setState({
        isAdmin: true
      });
    }
  };

  getTasks = page => {
    fetch(
      `https://uxcandy.com/~shapoval/test-task-backend/?developer=kostya&page=${page}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          taskList: data.message.tasks,
          totalCount: data.message.total_task_count
        });
      })
      .catch(res => console.log(res));
  };

  render() {
    const { taskList, totalCount, isAdmin, currentpage } = this.state;
    return (
      <div className="App">
        <Login
          isAdmin={isAdmin}
          handleLogout={this.handleLogout}
          handleLogin={this.handleLogin}
        />
        <Form />
        <PageNav
          pagesCount={Math.ceil(totalCount / 3)}
          handlePageChange={this.handlePageChange}
          currentpage={currentpage}
        />
        <TaskList
          taskList={taskList}
          isAdmin={isAdmin}
          handleTaskUpdate={this.handleTaskUpdate}
        />
      </div>
    );
  }
}

export default App;
