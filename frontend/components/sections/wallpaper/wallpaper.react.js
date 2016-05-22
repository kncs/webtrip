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

  renderVisiteDate() {
     if(this.props.gallery.visiteDate){
        return <p>{'Repassez par ici après le '} <span>{this.props.gallery.visiteDate}</span></p>
      }
  }
  renderContent() {
    if(this.props.gallery.resources.size > 0) {
      return <Wallpaper resources={this.props.gallery.resources}/>;
    }
    else {
      return (
        <div style={{padding : '50px'}}>
          <h2>{'Hum ... il semblerait que nous n\'ayons pas encore mis de photos !!'}</h2>
          { this.renderVisiteDate() }
        </div>
      );
    }
  }

  render() {
    return (
      <Section
          title={this.props.gallery.title}
          id="wallpaper"
          icon="camera-retro"
          links={SectionHelper.getWallpaperLinks()}
      >
        {this.renderContent()}
      </Section>

    );
  }
}
