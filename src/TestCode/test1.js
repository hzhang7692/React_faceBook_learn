import React, { Component } from 'react';
import ReactDOM from 'react-dom';


function formatName(user) {
  return user.firstName + ' ' + user.lastName
}
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Default.</h1>;
}
const user = {
  firstName: 'Luo',
  lastName: 'Hao'
};

export const element = (
  <h1>{getGreeting(user)} </h1>
)

const element1 = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
const element2 = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
)
export class MYTestComponent extends Component {
  render() {
    return (

      <h1>
        {getGreeting(user)}
        我是组件里面的属性:

        {this.props.sx}
      </h1>
    )
  }
}


function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
  setInterval(tick, 1000);
}

export function runChange() {

  ReactDOM.render(
    // element,
    <MYTestComponent sx='XXXXXXXXS' />,
    document.getElementById('root')
  )


  setTimeout(() => {
    tick()
  }, 5000)
}

