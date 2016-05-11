'use strict';

/**
 * Module dependencies
 */
import React, {Component} from 'react';
import GoogleMap from 'google-map-react';

import SectionHelper from '../section-helper'
import Section from '../../common/section.react'
import Markers from './marker.react'

import mockup from './mockup'
import style from './roadmap.less'




/**
 * Define Roadmap react component
 */
export default class Roadmap extends React.Component {

  renderCities(){
    return (
      <div className="panel panel-default">
        <div className="panel-heading">{'Principales étapes'}</div>
        <div className="panel-body">
          <ul className="list-group">
            {
              mockup.map(function(city, index){
                return <li key={index} className="list-group-item">{city.name}</li>
              })
            }
          </ul>
        </div>
      </div>
   );
  }


  render() {
    const markers = mockup.map(function(city, index) {
      return <Markers {...city.location} key={index} />
    });
    return (
      <Section
          id="roadmap"
          icon="map-signs"
          links={SectionHelper.getLinks('Parcours')}
      >
        <GoogleMap
            style = {{height:'100%'}}
            defaultCenter={[41, -108]}
            defaultZoom={5}
        >
          {/*markers*/}
        </GoogleMap>
        {this.renderCities()}
      </Section>
    );
  }
}
