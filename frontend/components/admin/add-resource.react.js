import React, {Component} from 'react'
import Dropdown from '../common/dropdown.react'
import InputFile from '../common/input-file.react'
import style from './add-resource.less'

import galleries from '../sections/gallery/mockup'

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

  renderFormComplement() {
    if(this.state.type === 'Texte') {
      return (
        <div className="row">
          <div className="col-sm-6"><h4>{'Entrer le commentaire'}</h4></div>
          <div className="col-sm-6"><textarea className="form-control" rows="3"/></div>
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
        </div>
      </section>
    );
  }
}
