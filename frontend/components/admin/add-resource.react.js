import React, {Component} from 'react'
import Dropdown from '../common/dropdown.react'
import InputFile from '../common/input-file.react'
import style from './add-resource.less'

import galleries from '../sections/gallery/mockup'

import galleriesActionsCreator from '../../actions/galleries-actions-creator'

export default class Roadmap extends React.Component {
  constructor() {
    super();
    this.state = {
      city : '',
      type : '',
      file : null,
      comment : ''
    }
  }

  handleSelectCity(value) {
    this.setState({
      city : value
    });
  }

  handleSelectType(value) {
    this.setState({
      type : value
    });
  }

  handleChangeComment() {
    let self = this;
    return function(event) {
      event.preventDefault();
      self.setState({
        comment : event.target.value
      });
    }
  }

  handleSubmit() {
    let self = this;
    return function(event) {
      event.preventDefault();
      galleriesActionsCreator.addResource(self.state);
    }
  }
  renderFormComplement() {
    if(this.state.type === 'Texte') {
      return (
        <div className="row">
          <div className="col-sm-6"><h4>{'Entrer le commentaire : '}</h4></div>
          <div className="col-sm-6">
            <textarea
                className="form-control"
                onChange={this.handleChangeComment()}
                rows="3"
            />
          </div>
        </div>
      );
    }
    else if(this.state.type === 'Image') {
      return (
        <div className="row">
          <div className="col-sm-6"><h4>{'Joindre une image : '}</h4></div>
          <div className="col-sm-6"><InputFile/></div>
        </div>
      );
    }
  }

  renderSubmitButton() {
    return (
      <div className="row">
        <div className="col-sm-offset-6 col-sm-6">
          <button
              className="btn btn-primary"
              onClick={this.handleSubmit()}
              type="submit"
              style={{width:'100%'}}
          >
            {'Ajouter'}
          </button>
        </div>
      </div>
    );
  }

  render() {
    let galleriesName = galleries.reduce(function (cumul, gallery) {
      cumul.push(gallery.name);
      return cumul;
    }, []);

    return (
      <section id="add-ressource">
        <div className="container">
          <div className="row">
            <h3>{'Ajouter une ressource'}</h3>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <h4>{'Selection de la ville :'}</h4>
            </div>
            <div className="col-sm-6">
              <Dropdown
                  options={galleriesName}
                  onSelect={this.handleSelectCity.bind(this)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <h4>{'Selection du type de ressource :'}</h4>
            </div>
            <div className="col-sm-6">
              <Dropdown
                  options={['Texte', 'Image']}
                  onSelect={this.handleSelectType.bind(this)}
              />
            </div>
          </div>
          {this.renderFormComplement()}
          {this.renderSubmitButton()}
        </div>
      </section>
    );
  }
}
