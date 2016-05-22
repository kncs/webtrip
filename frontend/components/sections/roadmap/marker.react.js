import React, {Component} from 'react';

export default class Marker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const markerStyle = {
      position: 'absolute',
      color : 'red',
      width: '20px',
      height: '32px',
      left: '-10px',
      top: '-32px'
    };
    return (
      <div style={markerStyle}>
        <i className="fa fa-map-marker" aria-hidden="true" style={{fontSize : '32px'}}/>
      </div>
    );
  }
}
