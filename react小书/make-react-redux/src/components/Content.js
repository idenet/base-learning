import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'

export default class Content extends Component {
  static propTypes = {
    store: PropTypes.object
  }
  render() {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>react 小书内容</p>
        <ThemeSwitch onSwitchColor={this.props.onSwitchColor.bind(this)} />
      </div>
    )
  }
}
