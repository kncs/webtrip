'use strict';

/**
 * Module dependencies
 */

import React, {Component} from 'react'
import Gridify from 'react-bootstrap-gridify';

import style from './wallpaper.less'
import images from '../../images'


/**
 * Define Polaroid react component
 */

let mockup = [
  {type:'image', src: images.SanFrancisco},
  {type:'image', src: images.Yosemite},
  {type:'text', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ullam necessitatibus, fuga molestias nesciunt animi, nulla rerum quam eos dolorum commodi dolorem, amet illo impedit vero labore error odio sequi.'},
  {type:'image', src: images.LasVegas},
  {type:'image', src: images.DeathValley},
  {type:'image', src: images.Zion},
  {type:'text', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ullam necessitatibus, fuga molestias nesciunt animi, nulla rerum quam eos dolorum commodi dolorem, amet illo impedit vero labore error odio sequi.'},
  {type:'image', src: images.NewYork},
];

export default class Wallpaper extends React.Component {

  buildComponents() {
    return mockup.map(function(card){
      if(card.type === 'text') {
        return (
          <div className="card">
            <p className="card-text">{card.description}</p>
          </div>

        );
      }
      else if(card.type === 'image') {
        return (
          <div className="card">
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
