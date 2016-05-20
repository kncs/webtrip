import React from 'react'
import {Container} from 'flux/utils';

import GalleryStore from '../stores/gallery-store';

class AppController extends React.Component {
  static getStores() {
    return [GalleryStore];
  }

  static calculateState() {
    return {
      gallery : GalleryStore.getGallery()
    };
  }

  render() {
    return (
      <div style={{height:'100%'}}>
        {this.props.children && React.cloneElement(this.props.children, {...this.state})}
      </div>
    )
  }
}

export default  Container.create(AppController);
