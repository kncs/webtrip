import React from 'react';
import $ from 'jquery';


export default class InputFile extends React.Component {
  constructor() {
    super();
    this.state = {
      file : '',
    };
  }

  handleChange() {
    let self = this;
    let reader = new FileReader();
    return function(event) {
      event.preventDefault();
      reader.onload = function(upload) {
        self.setState({
          file: upload.target.result,
        });
        self.props.onSelect(upload.target.result);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  handleOnClick(event) {
    event.preventDefault();
    $("#input-file").click();
  }

  render() {
    return (
      <div>
        <input
            accept=".jpg"
            id="input-file"
            onChange={this.handleChange()}
            style={{display: 'none'}}
            type="file"
        />
        <a
            id="a-upload-file"
            onClick = {this.handleOnClick}
            style={{textDecoration : 'underline', fontSize : '18px'}}
        >
          { (this.state.file && this.state.file.name) || 'Selection de l\'image'}
        </a>
      </div>
    );
  }
}
