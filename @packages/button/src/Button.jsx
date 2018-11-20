import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.label || 'button',
      counter: 0,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState(
      Object.assign({}, this.state, {
        label: 'clicked',
        counter: this.state.counter + 1,
      }),
    );
  }

  render() {
    return (
      <button onClick={this.onClick}>
        <span className="label">
          {this.state.label} (
          {this.state.label === 'clicked' && this.state.counter})
        </span>
      </button>
    );
  }
}

export default Button;
