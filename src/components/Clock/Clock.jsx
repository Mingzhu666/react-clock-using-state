import React, { Component } from 'react';
import FormattedDate from '../FormattedDate';
import './Clock.scss';

class Clock extends Component {
  constructor() {
    super();

    this.state = {
      date: new Date(),
    };
  }
  
  componentDidMount() {
    this.timeId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, Mingzhu</h1>
        {/*<h2>It is {this.state.date.toLocaleTimeString()}</h2>*/}
        <FormattedDate date={this.state.date} />
      </div>
    )
  };
}

export default Clock;