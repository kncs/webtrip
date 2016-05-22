import React, {Component} from 'react';
import GoogleMap from 'google-map-react';

import SectionHelper from '../section-helper'
import Section from '../../common/section.react'
import Marker from './marker.react'

import mockup from './mockup'
import style from './roadmap.less'

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
    return (
      <Section
          id="roadmap"
          icon="map-signs"
          links={SectionHelper.getLinks('Parcours')}
      >
        <GoogleMap
            style = {{height:'100%'}}
            defaultCenter={[41, -108]}
            defaultZoom={4}
        >
          <Marker lat={40.730292} lng={-73.998645} />
          <Marker lat={37.782647} lng={-122.416317} />
          <Marker lat={37.864940} lng={-119.538244} />
          <Marker lat={36.434628} lng={-118.684561} />
          <Marker lat={35.365144} lng={-119.037238} />
          <Marker lat={35.047404} lng={-118.168052} />
          <Marker lat={35.193580} lng={-114.062479} />
          <Marker lat={35.201950} lng={-111.649504} />
          <Marker lat={36.106722} lng={-112.113040} />
          <Marker lat={36.916445} lng={-111.456675} />
          <Marker lat={37.297997} lng={-113.026376} />
          <Marker lat={36.152400} lng={-115.144833} />
          <Marker lat={36.423056} lng={-116.925199} />
          <Marker lat={35.702742} lng={-117.868553} />
          <Marker lat={34.037253} lng={-118.251104} />
          <Marker lat={38.908516} lng={-77.037580} />
        </GoogleMap>
        {this.renderCities()}
      </Section>
    );
  }
}
