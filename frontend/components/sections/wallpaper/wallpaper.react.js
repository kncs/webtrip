'use strict';

/**
 * Module dependencies
 */
import React, {Component} from 'react';

import SectionHelper from '../section-helper';
import Section from '../../common/section.react';
import Wallpaper from '../../common/wallpaper.react';

import style from './wallpaper.less';


/**
 * Define Wallpaper react component
 */
export default class WallpaperSection extends React.Component {
  renderContent() {
    if(this.props.resources.size > 0) {
      return <Wallpaper resources={this.props.resources}/>;
    }
    else {
      return (
        <div>
          <h2>{'Arf, malheureusement nous n\'avons pas encore mis de photos !!'}</h2>
          <p>{'Repassez par ici après le '} <span>{'03 juin 2016'}</span></p>
        </div>
      );
    }
  }

  render() {
    return (
      <Section
          id="wallpaper"
          icon="camera-retro"
          links={SectionHelper.getWallpaperLinks()}
      >
        {this.renderContent()}
      </Section>

    );
  }
}
