import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
    this.addCounter = this.addCounter.bind(this)
  }
  componentWillMount() {
    console.log('Counter will mount')
  }
  componentDidMount() {
    console.log('Counter did mount')
  }
  shouldComponentUpdate() {
    console.log('Counter should update')
    return false
  }
  componentWillUpdate() {
    console.log('Counter will update')
  }
  componentDidUpdate() {
    console.log('Counter did update')
  }
  componentWillReceiveProps() {
    console.log('Counter will receive props')
  }
  addCounter() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
  render() {
    console.log('render')
    return (
      <div className='counter'>
        <h1>{this.props.label}</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={this.addCounter}>+1</button>
      </div>
    )
  }
}