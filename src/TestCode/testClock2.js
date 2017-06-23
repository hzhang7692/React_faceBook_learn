import React, { Component } from 'react'

import ReactDOM from 'react-dom'



export class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  //创建    生命周期 
  componentDidMount() {
    
  }
  //销毁    生命周期
  componentWillUnmount() {
    
  }
  render() {
    return (
      <div>
        <h1>
          我是自定义组件Clock
        </h1>
        <h2>
          {this.state.date.toLocaleTimeString()}
        </h2>
      </div>
    )
  }
}
export function change3() {
  ReactDOM.render(
    // element,
    <Clock />,
  document.getElementById('root')
  )
}
