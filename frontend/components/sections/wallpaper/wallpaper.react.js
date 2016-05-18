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
  render() {
    return (
      <Section
          id="wallpaper"
          icon="camera-retro"
          links={SectionHelper.getWallpaperLinks()}
      >
        <Wallpaper resources={this.props.resources}/>
      </Section>

    );
  }
}
