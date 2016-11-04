import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (<h1>Hello, { props.firstName } { props.lastName }</h1>)
}

ReactDOM.render(
  <Hello
    firstName={'Arnupharp'}
    lastName={'Viratanapanu'}
  />,
  document.getElementById('react-root')
)

