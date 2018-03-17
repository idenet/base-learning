import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Heador from './containers/Header'
import Content from './containers/Content'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

const themeReducer = (state, action) => {
  if (!state)
    return {
      themeColor: 'red'
    }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

const store = createStore(themeReducer)

class Index extends Component {
  render() {
    return (
      <div>
        <Heador />
        <Content />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
