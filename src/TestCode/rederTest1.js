
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
export function redenTest1(){
  ReactDOM.render(
    <Greeting isLoggedIn={false}/>,
    document.getElementById('root')
  )
}