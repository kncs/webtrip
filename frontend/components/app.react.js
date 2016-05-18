import React from 'react'
import {Container} from 'flux/utils';

import Hero from './hero/hero.react'
import Roadmap from './sections/roadmap/roadmap.react'
import Gallery from './sections/gallery/gallery.react'
import About from './sections/about/about.react'

import Wallpaper from './common/wallpaper.react'


import AppStore from '../stores/app-store';
import GalleryStore from '../stores/gallery-store';

/**
 * Define App react component
 */

class App extends React.Component {
  static getStores() {
    return [AppStore, GalleryStore];
  }

  static calculateState() {
    return {
      page : AppStore.getPage(),
      galleryResources : GalleryStore.getGallery()
    };
  }

  render() {
    let page = <Hero />;
    switch(this.state.page) {
      case 'about':
        page = <About />;
        break;
      case 'roadmap':
        page = <Roadmap />;
        break;
      case 'gallery':
        page = <Gallery />;
        break;
      case 'wallpaper':
        page = <Wallpaper resources={this.state.galleryResources}/>;
        break;
    }

    return (
      <div style={{height:'100%'}}>
        {page}
      </div>
    )
  }
}

export default  Container.create(App);
