import React, {Component} from 'react'

export default class Polaroid extends React.Component {
  render() {
    let padding = (this.props.size/20) +'px';
    let paddingBottom = (this.props.size/5) +'px';
    let imgStyle = {
      height: this.props.size+'px',
      width: this.props.size+'px',
      padding: padding +' '+padding+' '+paddingBottom+' '+padding,
      background: '#fff',
      border: '1px solid #eee',
      margin: 0
    }

    let pStyle = {
      position:'absolute',
      bottom: 0,
      marginBottom: 0,

      width: '100%',

      fontFamily: 'bringshoot',
      textAlign: 'center',
      fontSize: this.props.fontSize,
      color: this.props.fontColor
    }

    return (
      <div className="text-center center-block" style={{position: 'relative'}}>
        <img src={this.props.src} alt={this.props.alt} style={imgStyle}/>
        <p style={pStyle}>{this.props.title}</p>
      </div>
    );
  }
}

/**
 * Define propTypes
 */

Polaroid.propTypes = {
  src: React.PropTypes.string,
  alt: React.PropTypes.string,
  title: React.PropTypes.string
};

