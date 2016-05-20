import React from 'react';
import $ from 'jquery';


export default class InputFile extends React.Component {
  constructor() {
    super();
    this.state = {
      file : null,
    };
  }

  handleChange() {
    let self = this;
    return function(event) {
      event.preventDefault();
      self.setState({file: $("#input-file").files[0]});
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
            accept=".jpeg"
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
