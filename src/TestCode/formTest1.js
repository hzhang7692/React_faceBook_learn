/**
 * 下午1:23
 * 2017年6月26日
 * Author : 罗浩 (Luo Hao)
 * GitHub : https://github.com/RoJoHub
 * Blog   : http://blog.csdn.net/mandmg
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class NameForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  handleSubmit(e) {
    alert('A name was submitted: ' + this.state.value)
    e.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/>
        <label>Resule:{this.state.value}</label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    )
  }
  //创建    生命周期 
  componentDidMount() {

  }
  //销毁    生命周期
  componentWillUnmount() {

  }
}

export function formTest(){
  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  )
}
