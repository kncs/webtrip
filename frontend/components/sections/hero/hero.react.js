'use strict';

/**
 * Module dependencies
 */
import React, {Component} from 'react'
import style from './hero.less'

/**
 * Define Hero react component
 */

export default class Hero extends Component {

  render() {
    return (
      <section id="hero">
        <div className="container clearfix">
          <div className="row">
            <div className="col-sm-12">
              <span className="extra-title">{'Putaing,'.toUpperCase()}</span>
              <span>{' on part aux Etats-Unis !'.toUpperCase()}</span>
            </div>
          </div>
          <div className="row hero-bottom">
            <div className="col-sm-12">
              <span>{'On se casse, du coup pour les news c\'est '}</span>
              <span className="extra-description">{'ICI'}</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
