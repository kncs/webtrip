import React, {Component} from 'react';

export default class Marker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <i className="fa fa-map-marker" aria-hidden="true"/>
      </div>
    );
  }
}
