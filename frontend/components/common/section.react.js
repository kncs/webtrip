'use strict';

/**
 * Module dependencies
 */
import React, {Component} from 'react'

/**
 * Define Section react component
 */

export default class Section extends React.Component {
  render() {
    return (
      <section className="height100" id={this.props.id}>
        <div className="container-fluid height100">
          <div className="row height100">
            <div className="col-sm-4 height100">
              <h2>
                <i className={'fa fa-'+this.props.icon} aria-hidden="true"></i>
                {this.props.title.toUpperCase()}
              </h2>
            </div>
            <div className="col-sm-8 height100">
              {this.props.children}
            </div>
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
  title: React.PropTypes.string
};

