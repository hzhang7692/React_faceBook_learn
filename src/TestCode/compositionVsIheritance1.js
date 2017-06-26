/**
 * 上午11:17
 * 2017年6月26日
 * Author : 罗浩 (Luo Hao)
 * GitHub : https://github.com/RoJoHub
 * Blog   : http://blog.csdn.net/mandmg
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      <h1>我是父亲,下面是孩子们</h1>
      {props.children}
    </div>
  )
}

function WelcomeDialog(props) {
  return (
    <FancyBorder color='blue'>
      <h2 className="Dialog-title">
        Welcome
      </h2>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  )
}

export function compositionVsIheritance_Test1() {
  ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('root')
  )
}