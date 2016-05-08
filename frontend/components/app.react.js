'use strict';

/**
 * Module dependencies
 */
import React from 'react'

/**
 * Load Components
 */

import Hero from './hero/hero.react'

/**
 * Define App react component
 */

export default class App extends React.Component {
  render() {
    return (
      <div style={{height:'100%'}}>
        <Hero />
      </div>
    )
  }
}
