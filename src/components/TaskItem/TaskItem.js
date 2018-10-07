import React, { Component } from "react";
import "./TaskItem.css";
import md5 from "md5";
import Loader from "react-loader-spinner";

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskText: "",
      isEditMode: false,
      isLoading: false,
      isError: false,
      status: null,
      id: null
    };
  }
  componentDidMount() {
    this.setState({
      taskText: this.props.task.text,
      status: this.props.task.status,
      id: this.props.task.id
    });
  }

  handleTaskUpdate = (id, text, status) => {
    this.setState({
      isLoading: true
    });
    const form = new FormData();
    form.append("text", text);
    form.append("status", status);
    form.append("token", "beejee");

    let params_string = `${encodeURIComponent("status")}=${encodeURIComponent(
      status
    )}&${encodeURIComponent("text")}=${encodeURIComponent(
      text
    )}&${encodeURIComponent("token")}=${encodeURIComponent("beejee")}`;
    const signature = md5(params_string);
    form.append("signature", signature);
    fetch(
      `https://uxcandy.com/~shapoval/test-task-backend/edit/${id}?developer=kostya`,
      {
        method: "POST",
        body: form
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.status === "ok") {
          this.setState({
            isLoading: false,
            taskText: text,
            status
          });
        } else {
          this.setState({
            isLoading: false,
            isError: true,
            taskText: this.props.task.text,
            status: this.props.task.status
          });
          setTimeout(
            () =>
              this.setState({
                isError: false
              }),
            2500
          );
        }
      })
      .catch(res => console.log(res));
  };

  handleChange = event => {
    this.setState({
      taskText: event.target.value
    });
  };

  handleEdit = () => {
    this.setState({
      isEditMode: !this.state.isEditMode
    });
  };

  handleCheck = event => {
    const { taskText, id } = this.state;
    if (event.target.checked) {
      this.handleTaskUpdate(id, taskText, 10);
    } else {
      this.handleTaskUpdate(id, taskText, 0);
    }
  };

  handleSave = () => {
    console.log("save");
    const { taskText, status, id } = this.state;
    this.handleTaskUpdate(id, taskText, status);
    this.setState({
      isEditMode: !this.state.isEditMode
    });
  };

  render() {
    const {
      isAdmin,
      task: { username, email, image_path }
    } = this.props;
    const { isEditMode, taskText, status, isError, isLoading } = this.state;
    return (
      <div
        className={status === 10 ? `task-item task-item-avtive` : `task-item`}
      >
        {isAdmin &&
          (isLoading ? (
            <div className="loader-container">
              <Loader type="Puff" color="#00BFFF" height="32" width="32" />
            </div>
          ) : (
            <div className="task-edit-block">
              {isEditMode ? (
                <button className="btn-edit" onClick={this.handleSave}>
                  <i className="far fa-save fa-2x" />
                </button>
              ) : (
                <button className="btn-edit" onClick={this.handleEdit}>
                  <i className="far fa-edit fa-2x" />
                </button>
              )}
              <div className="checkbox">
                <input
                  type="checkbox"
                  checked={!!status}
                  onChange={this.handleCheck}
                />

                {!!status && <i className="fas fa-check fa-2x check-icon" />}
              </div>
            </div>
          ))}
        {isError && <span className="err-msg">Error on update</span>}
        <div className="task-user-info">
          <div className="task-name">{username}</div>
          <div className="task-email">{email}</div>
        </div>
        {isEditMode ? (
          <textarea
            className="task-text-edit"
            value={taskText}
            onChange={this.handleChange}
          />
        ) : (
          <div className="task-text">{taskText}</div>
        )}
        <img className="task-image" src={image_path} alt="task image" />
      </div>
    );
  }
}
