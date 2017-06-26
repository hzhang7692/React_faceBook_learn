/**
 * 下午12:50
 * 2017年6月26日
 * Author : 罗浩 (Luo Hao)
 * GitHub : https://github.com/RoJoHub
 * Blog   : http://blog.csdn.net/mandmg
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'


function ListItem(props) {
  return <li>{props.value}</li>
}
function List(props) {
  const numbers = props.numbers
  const items = numbers.map((number) => {
    return <ListItem key={number.toString()} value={number} />
  })
  return <ul>{items}</ul>
}


const mynumbers = [1, 2, 3, 4, 5];


export function listAndKetTest() {
  ReactDOM.render(
    <List numbers={mynumbers} />,
    document.getElementById('root')
  )
}