import React, {Component} from 'react'
import Dropdown from '../common/dropdown.react'

import galleriesActionsCreator from '../../actions/galleries-actions-creator'

export default class DeleteResource extends React.Component {
  constructor() {
    super();
    this.state = {
      city : '',
      block : -1
    }
  }

  handleSelectCity(value) {
    this.setState({
      city : value
    });
  }

  handleChangeDeleteBlock() {
    let self = this;
    return function(event) {
      event.preventDefault();
      self.setState({
        block : parseInt(event.target.value)
      });
    }
  }


  handleSubmit() {
    let self = this;
    return function(event) {
      event.preventDefault();
      galleriesActionsCreator.deleteResource(self.state);
    }
  }

  renderSubmitButton() {
    return (
      <div className="row">
        <div className="col-sm-offset-6 col-sm-6">
          <button
              className="btn btn-danger"
              onClick={this.handleSubmit()}
              type="submit"
              style={{width:'100%'}}
          >
            {'Supprimer'}
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id='delete-resource'>
        <div className="row">
          <h3>{'Supprimer une ressource'}</h3>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h4>{'Selection de la ville :'}</h4>
          </div>
          <div className="col-sm-6">
            <Dropdown
                options={this.props.galleries}
                onSelect={this.handleSelectCity.bind(this)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h4>{'Selection du bloc à supprimer :'}</h4>
          </div>
          <div className="col-sm-6">
            <input className="form-control" onChange={this.handleChangeDeleteBlock()}/>
          </div>
        </div>
        {this.renderSubmitButton()}
      </div>
    );
  }
}
