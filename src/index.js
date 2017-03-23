import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import CounterContainer from './components/CounterContainer'
import './style.css'

const render = (CounterContainer) => (
  ReactDOM.render(
    <AppContainer>
      <CounterContainer />
    </AppContainer>,
    document.getElementById('react-root')
  )
)
render(CounterContainer)
if (module.hot) {
  module.hot.accept('./components/CounterContainer', () => {
    // render(require('./components/Counter').default)
    render(CounterContainer)
  })
}


