'use strict';

/**
 * Module dependencies
 */
import React, {Component} from 'react';
import Gridify from 'react-bootstrap-gridify';

import SectionHelper from '../section-helper';
import Section from '../../common/section.react';

import style from './about.less';
import mockup from './mockup';


/**
 * Define Roadmap react component
 */
export default class Roadmap extends React.Component {
  renderComponents() {
    return mockup.map(function(member, index) {
      return (
        <div className="text-center center-block">
          <img
              className="img-circle"
              key={index}
              src={member.image.src}
              alt={member.image.alt}
          />

          <h3>
            <i className={'fa fa-'+ member.gender} aria-hidden="true"/>
            {member.name}
          </h3>
          <p className="lead">{member.nickname}</p>
          <h4>{member.skills}</h4>;
        </div>
      );
    })
  }
  render() {
    return (
      <Section
          id="about"
          icon="commenting"
          links={SectionHelper.getLinks('A propos')}
      >
        <Gridify columns={{xs:1, sm:2}} components={this.renderComponents()}/>
      </Section>
    );
  }
}
