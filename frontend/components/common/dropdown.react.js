import React from 'react';

export default class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      value : ''
    }
  }

  handleClick(label) {
    let self = this;
    return function(event) {
      event.preventDefault();
      self.props.onSelect(label);
      self.setState({value : label});
    }
  }

  render() {
    let self = this;
   return (
      <div className="dropdown" style={{width:'100%'}}>
        <button
            className="btn btn-default dropdown-toggle"
            type="button"
            id="dropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
            style={{width:'100%'}}
        >
          <span style={{float:'left'}}>{this.state.value}</span>
          <span className="caret" style={{height: 'inherit', float:'right', marginTop : '10px'}}/>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdown" style={{width:'100%'}}>
          {
            this.props.options.map(function(label) {
              return <li key={label}><a onClick={self.handleClick(label)}>{label}</a></li>
            })
          }
        </ul>
      </div>
    );
  }
}
