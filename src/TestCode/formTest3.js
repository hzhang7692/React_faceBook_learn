/**
 * 下午1:23
 * 2017年6月26日
 * Author : 罗浩 (Luo Hao)
 * GitHub : https://github.com/RoJoHub
 * Blog   : http://blog.csdn.net/mandmg
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export class MulInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(target)
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
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
export function formTest3(){
  ReactDOM.render(
    <MulInput/>,
    document.getElementById('root')
  )
}