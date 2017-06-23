import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>
          我是自定义组件Clock
        </h1>
        <h2>
          {this.props.data.toLocaleTimeString()}
        </h2>
      </div>
    )
  }
}
export function change2() {
  ReactDOM.render(
    <Clock data={new Date()} />,
    document.getElementById('root')
    // <Clock date={new Date()} />,
    // document.getElementById('root')

  )
}