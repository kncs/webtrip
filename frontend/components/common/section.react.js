'use strict';

/**
 * Module dependencies
 */
import React, {Component} from 'react'

/**
 * Define Section react component
 */

export default class Section extends React.Component {

  renderLinks() {
    return this.props.links.map(function(link, index){
      let className = link.active ? 'active' : '';
      return (
        <li className={className} key={index} onClick={link.onClick}>
          <a href={link.href}>
            {link.label}
          </a>
        </li>
      );
    })
  }

  render() {
    return (
      <section id={this.props.id}>
        <div className="section-header">
          <i className={"fa fa-" + this.props.icon} aria-hidden="true"></i>
          <ul className="section-links">
            {this.renderLinks()}
          </ul>
        </div>
        <div className="section-content container-fluid">
          <div className="row">
              {this.props.children}
          </div>
        </div>
      </section>
    );
  }
}

/**
 * Define propTypes
 */

Section.propTypes = {
  id: React.PropTypes.string,
  link: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      href: React.PropTypes.string,
      label: React.PropTypes.string
    })
  )
};

