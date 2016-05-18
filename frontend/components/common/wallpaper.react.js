
import React, {Component} from 'react'
import Gridify from 'react-bootstrap-gridify';

import style from './wallpaper.less'


/**
 * Define Wallpaper react component
 */
export default class Wallpaper extends React.Component {

  buildComponents() {
    return this.props.resources.map(function(card, index){
      if(card.type === 'text') {
        return (
          <div className="card" key={index}>
            <p className="card-text">{card.description}</p>
          </div>
        );
      }
      else if(card.type === 'image') {
        return (
          <div className="card" key={index}>
            <img className="card-image" src={card.src} alt={''}/>
          </div>
        );
      }
    })
  }

  render() {
    return (
      <div id="wallpaper">
        <Gridify columns={{xs:1, sm:2, lg:3}} components={this.buildComponents()}/>
      </div>
    );
  }
}
