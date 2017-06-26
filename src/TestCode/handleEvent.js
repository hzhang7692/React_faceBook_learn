/**
 * 下午6:19
 * 2017年6月23日
 * Author : 罗浩 (Luo Hao)
 * GitHub : https://github.com/RoJoHub
 * Blog   : http://blog.csdn.net/mandmg
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export class ClickTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true
    };
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ?'打开':'关闭'}
      </button>
    )
  }
  //创建    生命周期 
  componentDidMount() {

  }
  //销毁    生命周期
  componentWillUnmount() {

  }
}

export function handleTest(){
  ReactDOM.render(
    <ClickTest />,
    document.getElementById('root')
  )
  
}

