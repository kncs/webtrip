import React, {Component} from 'react'
import { Link } from 'react-router'

export default class Section extends React.Component {

  renderLinks() {
    return this.props.links.map(function(link, index){
      let className = link.active ? 'active' : '';
      return (
        <li className={className} key={index}>
          <Link to={link.href}>{link.label}</Link>
        </li>
      );
    })
  }

  renderTitle() {
    if(this.props.title) {
      return <span>{this.props.title}</span>
    }
  }

  render() {
    return (
      <section id={this.props.id}>
        <div className="section-header">
          <i className={"fa fa-" + this.props.icon} aria-hidden="true">
            {this.renderTitle()}
          </i>

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

