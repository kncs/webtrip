import React, {Component} from 'react';
import { Link } from 'react-router'
import Gridify from 'react-bootstrap-gridify';

import SectionHelper from '../section-helper';
import Section from '../../common/section.react';
import Polaroid from '../../common/polaroid.react';

import style from './gallery.less';
import mockup from './mockup';

import galleriesActionsCreator from '../../../actions/galleries-actions-creator.js'

export default class Roadmap extends React.Component {

  handleClick(gallery) {
    return function(event) {
      galleriesActionsCreator.getGallery(gallery);
    }
  }

  renderComponents() {
    let self = this;
    return mockup.map(function(gallery, index) {
      return (
        <Link to={`/gallery/${gallery.name}`} onClick = {self.handleClick(gallery)}>
          <Polaroid
              alt={gallery.image.alt}
              fontColor='black'
              fontSize='40px'
              key={index}
              size={300}
              src={gallery.image.src}
              title={gallery.title}
          />
        </Link>
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
