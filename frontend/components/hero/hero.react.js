import React, {Component} from 'react'
import { Link } from 'react-router'

import style from './hero.less'

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
              <span className="extra-description">
                <Link to="/roadmap">{'ICI'}</Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
