'use strict';

/**
 * Module dependencies
 */
import React from 'react'
import {Container} from 'flux/utils';

/**
 * Load Components
 */

import Hero from './hero/hero.react'
import Roadmap from './sections/roadmap/roadmap.react'
import Gallery from './sections/gallery/gallery.react'
import About from './sections/about/about.react'

/**
 * Load Stores
 */

import AppStore from '../stores/app-store';


/**
 * Define App react component
 */

class App extends React.Component {
  static getStores() {
    return [AppStore];
  }

  static calculateState() {
    return {
      page : AppStore.getPage()
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
    }

    return (
      <div style={{height:'100%'}}>
        {page}
      </div>
    )
  }
}

export default  Container.create(App);
