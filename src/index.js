import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import './style.css'

const render = (Counter) => (
  ReactDOM.render(
    <Counter label="I'm a counter" />,
    document.getElementById('react-root')
  )
)
render(Counter)
if (module.hot) {
  module.hot.accept('./components/Counter', () => {
    render(Counter)
  })
}


