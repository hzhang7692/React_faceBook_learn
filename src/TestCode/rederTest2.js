/**
 * 上午11:17
 * 2017年6月26日
 * Author : 罗浩 (Luo Hao)
 * GitHub : https://github.com/RoJoHub
 * Blog   : http://blog.csdn.net/mandmg
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function MailBox(props) {
  const unreadMessages = props.unreadMessages
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && <h2>你有{unreadMessages.length}条消息未读</h2>}
    </div>
  )
}
const messages = ['1', '2', '3']

export function rederTest2() {
  ReactDOM.render(
    <MailBox unreadMessages={messages} />,
    document.getElementById('root')
  )
}