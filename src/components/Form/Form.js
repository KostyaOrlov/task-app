import React, { Component } from "react";
import DropzoneField from "../DropzoneField/DropzoneField";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      text: "",
      image: null,
      isValidName: false,
      isValidEmail: false,
      isValidText: false,
      isValidForm: false
    };
  }

  handleInputChange = event => {
    const name = event.target.id;
    let value = event.target.value;
    this.setState(
      {
        [name]: value
      },
      () => {
        this.validateField(name, value);
      },
      this.validateForm
    );
  };

  validateField(fieldName, value) {
    let { isValidName, isValidEmail, isValidText } = this.state;

    switch (fieldName) {
      case "name":
        isValidName = value.length > 2;
        break;
      case "email":
        isValidEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        break;
      case "text":
        isValidText = value.length > 2;
        break;
      default:
        break;
    }
    this.setState(
      {
        isValidName,
        isValidEmail,
        isValidText
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      isValidForm:
        this.state.isValidName &&
        this.state.isValidEmail &&
        this.state.isValidText &&
        !!this.state.image
    });
  }

  handleImageDrop = files => {
    console.log(files[0].preview);
    const img = new Image();
    img.src = window.URL.createObjectURL(files[0]);
    img.onload = function() {
      var width = img.naturalWidth,
        height = img.naturalHeight;

      window.URL.revokeObjectURL(img.src);
      console.log(width, height);
    };
    this.setState(
      {
        image: files[0]
      },
      this.validateForm
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = new FormData();
    const { name, email, text, image } = this.state;
    form.append("username", name);
    form.append("email", email);
    form.append("text", text);
    form.append("image", image);
    fetch(
      "https://uxcandy.com/~shapoval/test-task-backend/create?developer=kostya",
      {
        method: "POST",
        body: form
      }
    )
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(res => console.log(res));
    this.setState({
      name: "",
      email: "",
      text: "",
      image: null
    });
  };

  render() {
    const { name, email, text, image, isValidForm } = this.state;
    return (
      <form className="task-form" onSubmit={this.handleSubmit}>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input
            className="input"
            type="text"
            id="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="text">Type your text here</label>
          <textarea
            className="textarea"
            type="text"
            id="text"
            value={text}
            onChange={this.handleInputChange}
          />
        </div>
        <DropzoneField onImageDrop={this.handleImageDrop} image={image} />
        <button
          className={isValidForm ? "btn" : "btn btn-inactive"}
          disabled={!isValidForm}
        >
          Add task
        </button>
      </form>
    );
  }
}
