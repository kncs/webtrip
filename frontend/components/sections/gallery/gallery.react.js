'use strict';

/**
 * Module dependencies
 */
import React, {Component} from 'react';
import Gridify from 'react-bootstrap-gridify';

import SectionHelper from '../section-helper';
import Section from '../../common/section.react';
import Polaroid from '../../common/polaroid.react';

import style from './gallery.less';
import mockup from './mockup';


/**
 * Define Roadmap react component
 */
export default class Roadmap extends React.Component {

  renderComponents() {
    return mockup.map(function(galery, index) {
      return (
        <Polaroid
            alt={galery.image.alt}
            fontColor='black'
            fontSize='40px'
            key={index}
            size={300}
            src={galery.image.src}
            title={galery.title}
        />
      );
    })
  }

  render() {
    console.log(SectionHelper);
    return (
      <Section
          id="galleries"
          icon="camera-retro"
          links={SectionHelper.getLinks('Gallerie')}
      >
        <Gridify columns={{xs:1, sm:2, md:3, lg:4}} components={this.renderComponents()}/>
      </Section>

    );
  }
}
