/**
 * 下午1:23
 * 2017年6月26日
 * Author : 罗浩 (Luo Hao)
 * GitHub : https://github.com/RoJoHub
 * Blog   : http://blog.csdn.net/mandmg
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export class FlavorForm extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 'coconut' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  //创建    生命周期 
  componentDidMount() {

  }
  //销毁    生命周期
  componentWillUnmount() {

  }
}
export function formTest2() {
  ReactDOM.render(
    <FlavorForm />,
    document.getElementById('root')
  )
}