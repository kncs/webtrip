'use strict';

/**
 * Module dependencies
 */
import React, {Component} from 'react';
import Section from '../../common/section.react';
import GoogleMap from 'google-map-react';

import style from './roadmap.less'



/**
 * Define Roadmap react component
 */
export default class Roadmap extends React.Component {
  render() {
    return (
      <Section
          icon="map-marker"
          id="roadmap"
          title={'Parcours'}
      >
        <GoogleMap
            style = {{height:'100%'}}
            defaultCenter={[37.769366, -122.421947]}
            defaultZoom={6}
        >

        </GoogleMap>
      </Section>
    );
  }
}
