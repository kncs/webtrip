import React, {Component} from 'react'
import AddResource from './add-resource.react'
import DeleteResource from './delete-resource.react'

import galleries from '../sections/gallery/mockup'
import style from './admin.less'

export default class admin extends React.Component {

  render() {

    let galleriesName = galleries.reduce(function (cumul, gallery) {
      cumul.push(gallery.name);
      return cumul;
    }, []);

    return (
      <section id="admin">
        <div className="container">
          <AddResource {...this.props} galleries={galleriesName}/>
          <DeleteResource {...this.props} galleries={galleriesName}/>
        </div>
      </section>
    );
  }
}
