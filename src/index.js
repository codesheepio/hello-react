import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Counter from './components/Counter'
import './style.css'

const render = (Counter) => (
  ReactDOM.render(
    <AppContainer>
      <Counter label="I'm a counter" />
    </AppContainer>,
    document.getElementById('react-root')
  )
)
render(Counter)
if (module.hot) {
  module.hot.accept('./components/Counter', () => {
    // render(require('./components/Counter').default)
    render(Counter)
  })
}


