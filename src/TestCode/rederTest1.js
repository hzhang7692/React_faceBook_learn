/**
 * 上午11:02
 * 2017年6月26日
 * Author : 罗浩 (Luo Hao)
 * GitHub : https://github.com/RoJoHub
 * Blog   : http://blog.csdn.net/mandmg
 */
 
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function After_message(props) {
  return <h1>欢迎回来</h1>
}
function Before_message(props) {
  return <h1>请先登录</h1>
}

function Greeting(props){
  const isLoggedIn=props.isLoggedIn
  if(!isLoggedIn){
    return <Before_message />
  }
  return <After_message />
} 



function MyButton(props){
  return(
    <button onClick={props.onClick}>{props.title}</button>
  )
}


export class LoginControl extends Component {
  constructor(props) {
    super(props)
    this.state = {isLoggedIn: false};
    this.inMethod = this.inMethod.bind(this)
    this.outMethod = this.outMethod.bind(this)
  }
  inMethod(){
    this.setState({
      isLoginIn:true
    })
  }
  outMethod(){
    this.setState({
      isLoginIn:false
    })
  }

  render() {
    const isLoginIn=this.state.isLoginIn
    let button
    if (isLoginIn) {
      button=<MyButton title='退出' onClick={this.outMethod}/>
    } else {
      button=<MyButton title='登录' onClick={this.inMethod}/>
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoginIn}/>
        {button}
      </div>
    )
  }
  //创建    生命周期 
  componentDidMount() {
    
  }
  //销毁    生命周期
  componentWillUnmount() {
    
  }
}

export function rederTest1(){
  ReactDOM.render(
    <LoginControl isLoggedIn={false}/>,
    document.getElementById('root')
  )
}