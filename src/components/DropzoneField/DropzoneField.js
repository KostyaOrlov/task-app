import React, { Component } from "react";
import Dropzone from "react-dropzone";
import "./DropzoneField.css";
import Image from "react-image-resizer";

export default class DropzoneField extends Component {
  render() {
    const { onImageDrop, image } = this.props;
    return (
      <div className="dropzone-field">
        <Dropzone className="dropzone" onDrop={onImageDrop} multiple={false}>
          {image ? (
            <img
              className="preview-image"
              src={image.preview}
              alt="todo-image"
            />
          ) : (
            <span>Upload image here</span>
          )}
        </Dropzone>
      </div>
    );
  }
}
