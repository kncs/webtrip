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
 * Load actions creators
 */
import galleriesActionsCreator from '../../../actions/galleries-actions-creator.js'
import appActionsCreator from '../../../actions/app-actions-creator.js'

/**
 * Define Roadmap react component
 */
export default class Roadmap extends React.Component {

  handleClick(galery) {
    return function(event) {
      event.preventDefault();
      galleriesActionsCreator.getGallery(galery);
      appActionsCreator.changePage('wallpaper');
    }
  }

  renderComponents() {
    let self = this;
    return mockup.map(function(galery, index) {
      return (
        <Polaroid
            alt={galery.image.alt}
            fontColor='black'
            fontSize='40px'
            key={index}
            onClick = {self.handleClick(galery)}
            size={300}
            src={galery.image.src}
            title={galery.title}
        />
      );
    })
  }

  render() {
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
